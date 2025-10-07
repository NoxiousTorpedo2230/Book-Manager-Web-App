import React from 'react';
import EditableCell from './EditableCell';

const DataTable = ({ data, onEdit, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const hasModifiedRecords = currentData.some(book => book.modified);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="card-title mb-0">
          <i className="bi bi-book me-2"></i>
          Book Library
        </h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{width: '60px'}}>#</th>
                <th scope="col" style={{minWidth: '200px'}}>
                  <i className="bi bi-book me-1"></i>Title
                </th>
                <th scope="col" style={{minWidth: '150px'}}>
                  <i className="bi bi-person me-1"></i>Author
                </th>
                <th scope="col" style={{width: '120px'}}>
                  <i className="bi bi-tag me-1"></i>Genre
                </th>
                <th scope="col" style={{width: '100px'}}>
                  <i className="bi bi-calendar me-1"></i>Year
                </th>
                <th scope="col" style={{width: '140px'}}>
                  <i className="bi bi-upc me-1"></i>ISBN
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((book, index) => (
                <tr key={book.id} className={book.modified ? 'table-warning' : ''}>
                  <td className="text-center fw-bold text-muted">
                    <span className="badge bg-light text-dark">
                      {startIndex + index + 1}
                    </span>
                  </td>
                  <td>
                    <EditableCell
                      value={book.Title}
                      onSave={(newValue) => onEdit(book.id, 'Title', newValue)}
                    />
                  </td>
                  <td>
                    <EditableCell
                      value={book.Author}
                      onSave={(newValue) => onEdit(book.id, 'Author', newValue)}
                    />
                  </td>
                  <td>
                    <EditableCell
                      value={book.Genre}
                      onSave={(newValue) => onEdit(book.id, 'Genre', newValue)}
                    />
                  </td>
                  <td>
                    <EditableCell
                      value={book.PublishedYear}
                      onSave={(newValue) => onEdit(book.id, 'PublishedYear', parseInt(newValue) || book.PublishedYear)}
                      type="number"
                    />
                  </td>
                  <td>
                    <EditableCell
                      value={book.ISBN}
                      onSave={(newValue) => onEdit(book.id, 'ISBN', newValue)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {hasModifiedRecords && (
          <div className="card-footer bg-warning text-dark py-1">
            <small>
              <i className="bi bi-exclamation-triangle me-1"></i>
              Some records have been modified
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;