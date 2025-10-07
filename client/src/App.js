import React from 'react';
import FileUpload from './components/FileUpload';
import SearchAndFilter from './components/SearchAndFilter';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import { LoadingSpinner, DataStats, ActionButtons } from './components/UIComponents';
import { useDataManager, useFiltersAndSorting } from './hooks/useDataManager';

const App = () => {
  const {
    data,
    isLoading,
    hasModifications,
    handleFileUpload,
    handleEdit,
    handleDownload,
    handleReset
  } = useDataManager();

  const {
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
    filteredAndSortedData
  } = useFiltersAndSorting(data);

  const itemsPerPage = 50;
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">📚 Book Data Manager</h1>
          
          <FileUpload onFileUpload={handleFileUpload} isLoading={isLoading} />
          
          {isLoading && <LoadingSpinner message="Processing data..." />}
          
          {data.length > 0 && (
            <>
              <DataStats
                data={data}
                filteredData={filteredAndSortedData}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
              />
              
              <ActionButtons
                onDownload={handleDownload}
                onReset={handleReset}
                hasModifications={hasModifications}
              />
              
              <SearchAndFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                genreFilter={genreFilter}
                setGenreFilter={setGenreFilter}
                genres={genres}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />
              
              <div className="card">
                <div className="card-body">
                  <DataTable
                    data={filteredAndSortedData}
                    onEdit={handleEdit}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                  />
                  
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </>
          )}
          
          {data.length === 0 && !isLoading && (
            <div className="alert alert-info">
              <h5>Welcome to Book Data Manager!</h5>
              <p>Upload a CSV file or generate sample data to get started. Your CSV should have columns: Title, Author, Genre, PublishedYear, ISBN</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;