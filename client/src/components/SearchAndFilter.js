import React, { useState } from 'react';

const SearchAndFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  genreFilter, 
  setGenreFilter, 
  genres, 
  sortBy, 
  setSortBy, 
  sortOrder, 
  setSortOrder 
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const clearAllFilters = () => {
    setSearchTerm('');
    setGenreFilter('');
    setSortBy('');
    setSortOrder('asc');
  };

  const hasActiveFilters = searchTerm || genreFilter || sortBy;

  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-header bg-gradient d-flex justify-content-between align-items-center" 
           style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
        <h6 className="card-title mb-0 d-flex align-items-center text-dark">
          <i className="bi bi-funnel me-2 text-primary"></i>
          Search & Filter Options
          {hasActiveFilters && (
            <span className="badge bg-primary ms-2">
              {[searchTerm, genreFilter, sortBy].filter(Boolean).length}
            </span>
          )}
        </h6>
        <div className="d-flex gap-2">
          {hasActiveFilters && (
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={clearAllFilters}
              title="Clear all filters"
            >
              <i className="bi bi-x-circle me-1"></i>
              Clear
            </button>
          )}
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'}`}></i>
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="card-body bg-light">
          <div className="row g-3">
            <div className="col-xl-4 col-lg-6">
              <label className="form-label fw-semibold small text-muted">
                <i className="bi bi-search me-1"></i>Search Books
              </label>
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 shadow-sm"
                  placeholder="Search by title, author, or ISBN..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{paddingLeft: '0'}}
                />
                {searchTerm && (
                  <button 
                    className="btn btn-outline-secondary border-start-0"
                    onClick={() => setSearchTerm('')}
                    title="Clear search"
                  >
                    <i className="bi bi-x"></i>
                  </button>
                )}
              </div>
              {searchTerm && (
                <small className="text-muted mt-1 d-block">
                  <i className="bi bi-info-circle me-1"></i>
                  Searching across titles, authors, and ISBNs
                </small>
              )}
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4">
              <label className="form-label fw-semibold small text-muted">
                <i className="bi bi-tag me-1"></i>Genre Filter
              </label>
              <select
                className="form-select shadow-sm"
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
              >
                <option value="">All Genres</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre} ({genre.length > 15 ? genre.substring(0, 15) + '...' : genre})
                  </option>
                ))}
              </select>
              {genres.length > 0 && (
                <small className="text-muted mt-1 d-block">
                  {genres.length} genres available
                </small>
              )}
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4">
              <label className="form-label fw-semibold small text-muted">
                <i className="bi bi-sort-alpha-down me-1"></i>Sort By
              </label>
              <select
                className="form-select shadow-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Default Order</option>
                <option value="Title">📚 Title</option>
                <option value="Author">✍️ Author</option>
                <option value="Genre">🏷️ Genre</option>
                <option value="PublishedYear">📅 Published Year</option>
              </select>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4">
              <label className="form-label fw-semibold small text-muted">
                <i className="bi bi-arrow-up-down me-1"></i>Order
              </label>
              <select
                className="form-select shadow-sm"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                disabled={!sortBy}
              >
                <option value="asc">
                  <i className="bi bi-sort-alpha-down"></i> A → Z
                </option>
                <option value="desc">
                  <i className="bi bi-sort-alpha-up"></i> Z → A
                </option>
              </select>
            </div>

            <div className="col-xl-1 col-lg-3 col-md-12">
              <label className="form-label fw-semibold small text-muted d-block">
                Actions
              </label>
              <div className="d-flex gap-1 flex-wrap">
                <button
                  className={`btn btn-sm ${hasActiveFilters ? 'btn-warning' : 'btn-outline-secondary'}`}
                  onClick={clearAllFilters}
                  disabled={!hasActiveFilters}
                  title="Reset all filters"
                >
                  <i className="bi bi-arrow-clockwise"></i>
                </button>
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-3 pt-3 border-top">
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <small className="text-muted fw-medium">Active filters:</small>
                {searchTerm && (
                  <span className="badge bg-primary">
                    Search: "{searchTerm.length > 20 ? searchTerm.substring(0, 20) + '...' : searchTerm}"
                  </span>
                )}
                {genreFilter && (
                  <span className="badge bg-info">
                    Genre: {genreFilter}
                  </span>
                )}
                {sortBy && (
                  <span className="badge bg-success">
                    Sort: {sortBy} ({sortOrder === 'asc' ? '↑' : '↓'})
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;