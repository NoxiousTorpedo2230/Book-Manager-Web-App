import { CSV_HEADERS } from '../others/constants';

export class DataService {
  /**
   * Validates book data structure
   * @param {Array} data - Array of book objects
   * @returns {boolean} - Whether data is valid
   */
  static validateBookData(data) {
    if (!Array.isArray(data) || data.length === 0) {
      return false;
    }

    const requiredFields = Object.values(CSV_HEADERS);
    return data.every(book => 
      requiredFields.every(field => field in book)
    );
  }

  /**
   * Sanitizes and normalizes book data
   * @param {Object} book - Book object
   * @returns {Object} - Sanitized book object
   */
  static sanitizeBook(book) {
    return {
      ...book,
      Title: String(book.Title || '').trim(),
      Author: String(book.Author || '').trim(),
      Genre: String(book.Genre || '').trim(),
      PublishedYear: parseInt(book.PublishedYear) || 0,
      ISBN: String(book.ISBN || '').trim()
    };
  }

  /**
   * Filters data based on search term and genre
   * @param {Array} data - Array of books
   * @param {string} searchTerm - Search term
   * @param {string} genreFilter - Genre filter
   * @returns {Array} - Filtered data
   */
  static filterData(data, searchTerm = '', genreFilter = '') {
    return data.filter(book => {
      const matchesSearch = searchTerm === '' || 
        Object.values(book).some(value => 
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesGenre = genreFilter === '' || book.Genre === genreFilter;
      return matchesSearch && matchesGenre;
    });
  }

  /**
   * Sorts data by specified field and order
   * @param {Array} data - Array of books
   * @param {string} sortBy - Field to sort by
   * @param {string} sortOrder - Sort order (asc/desc)
   * @returns {Array} - Sorted data
   */
  static sortData(data, sortBy, sortOrder = 'asc') {
    if (!sortBy) return data;

    return [...data].sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      if (sortBy === 'PublishedYear') {
        aVal = parseInt(aVal);
        bVal = parseInt(bVal);
      } else {
        aVal = String(aVal).toLowerCase();
        bVal = String(bVal).toLowerCase();
      }
      
      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }

  /**
   * Gets unique values for a specific field
   * @param {Array} data - Array of books
   * @param {string} field - Field name
   * @returns {Array} - Array of unique values
   */
  static getUniqueValues(data, field) {
    return [...new Set(data.map(book => book[field]))].sort();
  }

  /**
   * Calculates statistics for the data
   * @param {Array} data - Array of books
   * @param {Array} filteredData - Filtered array of books
   * @returns {Object} - Statistics object
   */
  static getDataStatistics(data, filteredData) {
    const totalRecords = data.length;
    const filteredRecords = filteredData.length;
    const modifiedRecords = data.filter(item => item.modified).length;
    const uniqueGenres = this.getUniqueValues(data, 'Genre').length;
    const uniqueAuthors = this.getUniqueValues(data, 'Author').length;

    return {
      totalRecords,
      filteredRecords,
      modifiedRecords,
      uniqueGenres,
      uniqueAuthors
    };
  }

  /**
   * Paginates data
   * @param {Array} data - Array of books
   * @param {number} currentPage - Current page number
   * @param {number} itemsPerPage - Items per page
   * @returns {Object} - Paginated data and info
   */
  static paginateData(data, currentPage, itemsPerPage) {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return {
      currentData,
      totalPages,
      totalItems,
      startIndex,
      endIndex: Math.min(endIndex, totalItems),
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1
    };
  }
}