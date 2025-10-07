import { useState, useCallback, useMemo, useEffect } from 'react';
import { parseCSVFile, downloadCSV } from '../utils/csvUtils';
import { generateFakeBookData } from '../utils/dataGenerator';
import { DataService } from '../services/dataService';
import { ITEMS_PER_PAGE, MESSAGES } from '../others/constants';

export const useDataManager = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = useCallback(async (file, generateFake = false) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (generateFake) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const fakeData = generateFakeBookData(10000);
        setData(fakeData);
        setOriginalData(JSON.parse(JSON.stringify(fakeData)));
      } else {
        const processedData = await parseCSVFile(file);
        
        if (!DataService.validateBookData(processedData)) {
          throw new Error('Invalid CSV format. Please check your file structure.');
        }
        
        const sanitizedData = processedData.map(book => 
          DataService.sanitizeBook(book)
        );
        
        setData(sanitizedData);
        setOriginalData(JSON.parse(JSON.stringify(sanitizedData)));
      }
    } catch (error) {
      console.error('Error processing file:', error);
      setError(error.message || MESSAGES.PROCESSING_ERROR);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleEdit = useCallback((id, field, newValue) => {
    setData(prevData => 
      prevData.map(item => 
        item.id === id 
          ? { ...item, [field]: newValue, modified: true }
          : item
      )
    );
  }, []);

  const handleBulkEdit = useCallback((updates) => {
    setData(prevData => 
      prevData.map(item => {
        const update = updates.find(u => u.id === item.id);
        return update 
          ? { ...item, ...update.changes, modified: true }
          : item;
      })
    );
  }, []);

  const handleDownload = useCallback((filename) => {
    try {
      downloadCSV(data, filename);
    } catch (error) {
      console.error('Error downloading file:', error);
      setError('Failed to download file');
    }
  }, [data]);

  const handleReset = useCallback(() => {
    if (window.confirm(MESSAGES.RESET_CONFIRMATION)) {
      setData(JSON.parse(JSON.stringify(originalData)));
      setError(null);
    }
  }, [originalData]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const statistics = useMemo(() => 
    DataService.getDataStatistics(data, data), [data]
  );

  const hasModifications = useMemo(() => 
    data.some(item => item.modified), [data]
  );

  return {
    data,
    originalData,
    isLoading,
    error,
    hasModifications,
    statistics,
    handleFileUpload,
    handleEdit,
    handleBulkEdit,
    handleDownload,
    handleReset,
    clearError
  };
};

export const useFiltersAndSorting = (data) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const genres = useMemo(() => 
    DataService.getUniqueValues(data, 'Genre'), [data]
  );

  const filteredAndSortedData = useMemo(() => {
    let filtered = DataService.filterData(data, searchTerm, genreFilter);
    return DataService.sortData(filtered, sortBy, sortOrder);
  }, [data, searchTerm, genreFilter, sortBy, sortOrder]);

  const paginationData = useMemo(() => 
    DataService.paginateData(filteredAndSortedData, currentPage, ITEMS_PER_PAGE),
    [filteredAndSortedData, currentPage]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, genreFilter, sortBy]);

  const clearAllFilters = useCallback(() => {
    setSearchTerm('');
    setGenreFilter('');
    setSortBy('');
    setSortOrder('asc');
    setCurrentPage(1);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    genreFilter,
    setGenreFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    currentPage,
    setCurrentPage,
    genres,
    filteredAndSortedData,
    paginationData,
    clearAllFilters
  };
};

export const useKeyboardShortcuts = (callbacks) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        callbacks.onDownload?.();
      }
      
      if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
        event.preventDefault();
        callbacks.onReset?.();
      }
      
      if (event.key === 'Escape') {
        callbacks.onClearSearch?.();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [callbacks]);
};