import React, { useRef } from 'react';

const FileUpload = ({ onFileUpload, isLoading }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      onFileUpload(file);
    } else {
      alert('Please select a valid CSV file');
    }
  };

  const handleGenerateData = () => {
    onFileUpload(null, true); 
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'text/csv') {
        onFileUpload(file);
      } else {
        alert('Please select a valid CSV file');
      }
    }
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h5 className="card-title mb-0 d-flex align-items-center">
          <i className="bi bi-cloud-upload me-2"></i>
          Data Import
        </h5>
      </div>
      <div className="card-body p-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <label htmlFor="fileInput" className="form-label fw-semibold mb-3">
              <i className="bi bi-file-earmark-arrow-up me-1"></i>
              Upload CSV File
            </label>
          
            <div 
              className="border-2 border-dashed border-primary rounded p-4 text-center mb-3"
              style={{
                backgroundColor: '#f8f9ff',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e3f2fd';
                e.target.style.borderColor = '#1976d2';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f8f9ff';
                e.target.style.borderColor = '#0d6efd';
              }}
            >
              <i className="bi bi-cloud-upload display-4 text-primary mb-2"></i>
              <p className="mb-2 fw-medium">Drag & drop your CSV file here</p>
              <p className="text-muted small mb-0">or click to browse</p>
            </div>

            <input
              ref={fileInputRef}
              id="fileInput"
              type="file"
              className="form-control d-none"
              accept=".csv"
              onChange={handleFileChange}
              disabled={isLoading}
            />
            
            <div className="alert alert-info border-0 mb-0" style={{backgroundColor: '#e3f2fd'}}>
              <div className="d-flex align-items-center">
                <i className="bi bi-info-circle me-2 text-primary"></i>
                <div>
                  <strong>Expected CSV format:</strong> Title, Author, Genre, PublishedYear, ISBN
                  <br />
                  <small className="text-muted">Make sure your CSV has these exact column headers</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="d-flex flex-column h-100">
              <label className="form-label fw-semibold mb-3">
                <i className="bi bi-magic me-1"></i>
                Quick Start
              </label>
              
              <div className="flex-grow-1 d-flex align-items-center">
                <button
                  className="btn btn-primary btn-lg w-100 shadow"
                  onClick={handleGenerateData}
                  disabled={isLoading}
                  style={{
                    background: 'linear-gradient(45deg, #0d6efd, #6f42c1)',
                    border: 'none',
                    transform: isLoading ? 'scale(0.98)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Generating Books...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-stars me-2"></i>
                      Generate 10,000 Sample Books
                    </>
                  )}
                </button>
              </div>
              
              <div className="mt-3">
                <small className="text-muted">
                  <i className="bi bi-lightbulb me-1"></i>
                  Perfect for testing and demonstration purposes
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;