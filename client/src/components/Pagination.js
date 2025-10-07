import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  const jumpToFirst = () => onPageChange(1);
  const jumpToLast = () => onPageChange(totalPages);

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 my-4">
      <div className="d-flex align-items-center">
        <span className="badge bg-light text-dark fs-6 px-3 py-2">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination pagination-lg mb-0 shadow-sm">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link border-0"
              onClick={jumpToFirst}
              disabled={currentPage === 1}
              aria-label="First page"
              title="First page"
            >
              <i className="bi bi-chevron-double-left"></i>
            </button>
          </li>

          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link border-0"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              title="Previous page"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          </li>
          
          {getPageNumbers().map((page, index) => (
            <li key={index} className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}>
              {page === '...' ? (
                <span className="page-link border-0 bg-transparent text-muted">…</span>
              ) : (
                <button
                  className={`page-link border-0 ${page === currentPage ? 'bg-primary text-white shadow' : 'bg-light text-primary'}`}
                  onClick={() => onPageChange(page)}
                  style={{
                    minWidth: '45px',
                    fontWeight: page === currentPage ? 'bold' : 'normal',
                    transform: page === currentPage ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link border-0"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              title="Next page"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </li>

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link border-0"
              onClick={jumpToLast}
              disabled={currentPage === totalPages}
              aria-label="Last page"
              title="Last page"
            >
              <i className="bi bi-chevron-double-right"></i>
            </button>
          </li>
        </ul>
      </nav>

      {totalPages > 10 && (
        <div className="d-flex align-items-center gap-2">
          <small className="text-muted">Jump to:</small>
          <select
            className="form-select form-select-sm"
            style={{width: 'auto'}}
            value={currentPage}
            onChange={(e) => onPageChange(parseInt(e.target.value))}
          >
            {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
              <option key={page} value={page}>Page {page}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Pagination;