import React, { useState } from 'react';

const EditableCell = ({ value, onSave, type = 'text' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    if (editValue.trim() !== '') {
      onSave(editValue);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="input-group input-group-sm">
        <input
          type={type}
          className="form-control border-primary"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          autoFocus
          style={{fontSize: '0.875rem'}}
        />
        <button 
          className="btn btn-outline-success btn-sm px-2" 
          type="button"
          onClick={handleSave}
          title="Save (Enter)"
        >
          <i className="bi bi-check"></i>
        </button>
        <button 
          className="btn btn-outline-secondary btn-sm px-2" 
          type="button"
          onClick={handleCancel}
          title="Cancel (Escape)"
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className="editable-cell d-block w-100 px-2 py-1 rounded position-relative"
      style={{ 
        cursor: 'pointer', 
        minHeight: '32px',
        backgroundColor: 'transparent',
        transition: 'all 0.2s ease',
        border: '1px solid transparent'
      }}
      title="Click to edit"
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#f8f9fa';
        e.target.style.borderColor = '#dee2e6';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.borderColor = 'transparent';
      }}
    >
      {value || <em className="text-muted">Click to edit</em>}
      <i className="bi bi-pencil-square position-absolute" 
         style={{
           right: '4px', 
           top: '50%', 
           transform: 'translateY(-50%)', 
           fontSize: '0.75rem', 
           opacity: '0.4'
         }}></i>
    </div>
  );
};

export default EditableCell;