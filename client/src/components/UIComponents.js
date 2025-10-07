import React from 'react';

export const LoadingSpinner = ({ message }) => (
  <div className="d-flex flex-column justify-content-center align-items-center py-5">
    <div className="spinner-border text-primary mb-3" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="text-center">
      <h5 className="text-primary mb-2">{message || 'Loading...'}</h5>
      <p className="text-muted mb-0">Please wait while we process your request</p>
    </div>
  </div>
);

export const DataStats = ({ data, filteredData, currentPage, itemsPerPage }) => {
  const totalItems = filteredData.length;
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  const modifiedCount = data.filter(item => item.modified).length;

  const stats = [
    {
      icon: 'bi-collection',
      label: 'Total Records',
      value: data.length,
      color: 'primary',
      bgColor: 'bg-primary bg-opacity-10'
    },
    {
      icon: 'bi-funnel',
      label: 'Filtered Results',
      value: totalItems,
      color: 'info',
      bgColor: 'bg-info bg-opacity-10'
    },
    {
      icon: 'bi-pencil-square',
      label: 'Modified Records',
      value: modifiedCount,
      color: 'warning',
      bgColor: 'bg-warning bg-opacity-10'
    },
    {
      icon: 'bi-eye',
      label: 'Currently Showing',
      value: totalItems === 0 ? 'None' : `${startItem}-${endItem}`,
      color: 'secondary',
      bgColor: 'bg-secondary bg-opacity-10'
    }
  ];

  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-header bg-white border-bottom-0 pb-0">
        <h6 className="card-title mb-0 text-muted">
          <i className="bi bi-graph-up me-2"></i>
          Data Overview
        </h6>
      </div>
      <div className="card-body pt-3">
        <div className="row g-3">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`card h-100 border-0 ${stat.bgColor}`}>
                <div className="card-body text-center py-3">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <i className={`${stat.icon} fs-3 text-${stat.color} me-2`}></i>
                  </div>
                  <h3 className={`mb-1 fw-bold text-${stat.color}`}>
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                  </h3>
                  <small className="text-muted fw-medium">{stat.label}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {data.length > 0 && (
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted">Filter Coverage</small>
              <small className="text-muted">
                {((totalItems / data.length) * 100).toFixed(1)}%
              </small>
            </div>
            <div className="progress" style={{height: '8px'}}>
              <div 
                className="progress-bar bg-info" 
                role="progressbar" 
                style={{width: `${(totalItems / data.length) * 100}%`}}
                aria-valuenow={totalItems} 
                aria-valuemin="0" 
                aria-valuemax={data.length}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ActionButtons = ({ onDownload, onReset, hasModifications, isLoading }) => {
  const actions = [
    {
      icon: 'bi-download',
      label: 'Download CSV',
      onClick: onDownload,
      variant: 'success',
      disabled: isLoading,
      tooltip: 'Export current data to CSV file'
    },
    {
      icon: 'bi-arrow-clockwise',
      label: 'Reset All Edits',
      onClick: onReset,
      variant: 'warning',
      disabled: !hasModifications || isLoading,
      tooltip: hasModifications ? 'Undo all modifications' : 'No modifications to reset'
    }
  ];

  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-header bg-white border-bottom-0 pb-0">
        <h6 className="card-title mb-0 text-muted">
          <i className="bi bi-gear me-2"></i>
          Quick Actions
        </h6>
      </div>
      <div className="card-body pt-3">
        <div className="d-flex gap-3 flex-wrap">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`btn btn-${action.variant} btn-lg shadow-sm d-flex align-items-center`}
              onClick={action.onClick}
              disabled={action.disabled}
              title={action.tooltip}
              style={{
                minWidth: '160px',
                transition: 'all 0.2s ease',
                transform: action.disabled ? 'scale(0.95)' : 'scale(1)'
              }}
            >
              <i className={`${action.icon} me-2`}></i>
              {isLoading && action.onClick === onDownload ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Processing...
                </>
              ) : (
                action.label
              )}
            </button>
          ))}
        </div>
        
        {hasModifications && (
          <div className="alert alert-warning mt-3 mb-0 border-0 bg-warning bg-opacity-10">
            <div className="d-flex align-items-center">
              <i className="bi bi-exclamation-triangle text-warning me-2"></i>
              <small className="mb-0">
                <strong>Notice:</strong> You have unsaved modifications. 
                Don't forget to download your changes or they will be lost when you refresh the page.
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const EmptyState = ({ 
  icon = 'bi-inbox', 
  title = 'No data available', 
  description = 'Upload a CSV file or generate sample data to get started.',
  actionButton 
}) => (
  <div className="text-center py-5">
    <div className="mb-4">
      <i className={`${icon} display-1 text-muted`}></i>
    </div>
    <h4 className="text-muted mb-3">{title}</h4>
    <p className="text-muted mb-4 mx-auto" style={{maxWidth: '400px'}}>
      {description}
    </p>
    {actionButton && (
      <div>{actionButton}</div>
    )}
  </div>
);

export const ErrorBoundary = ({ error, onRetry }) => (
  <div className="card border-danger">
    <div className="card-header bg-danger text-white">
      <h5 className="card-title mb-0">
        <i className="bi bi-exclamation-triangle me-2"></i>
        Something went wrong
      </h5>
    </div>
    <div className="card-body text-center py-5">
      <i className="bi bi-bug display-1 text-danger mb-3"></i>
      <h6 className="text-danger mb-3">Error Details</h6>
      <p className="text-muted mb-4 font-monospace small bg-light p-3 rounded">
        {error?.message || 'An unexpected error occurred'}
      </p>
      {onRetry && (
        <button 
          className="btn btn-primary"
          onClick={onRetry}
        >
          <i className="bi bi-arrow-clockwise me-2"></i>
          Try Again
        </button>
      )}
    </div>
  </div>
);
