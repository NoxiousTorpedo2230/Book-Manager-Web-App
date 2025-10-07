export const ITEMS_PER_PAGE = 50;

export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc'
};

export const SORT_FIELDS = {
  TITLE: 'Title',
  AUTHOR: 'Author',
  GENRE: 'Genre',
  PUBLISHED_YEAR: 'PublishedYear',
  ISBN: 'ISBN'
};

export const CSV_HEADERS = {
  TITLE: 'Title',
  AUTHOR: 'Author', 
  GENRE: 'Genre',
  PUBLISHED_YEAR: 'PublishedYear',
  ISBN: 'ISBN'
};

export const FAKE_DATA_CONFIG = {
  DEFAULT_COUNT: 10000,
  YEAR_RANGE: {
    MIN: 1800,
    MAX: 2024
  }
};

export const PAGINATION_CONFIG = {
  DELTA: 2, 
  SHOW_ELLIPSIS: true
};

export const MESSAGES = {
  FILE_UPLOAD_ERROR: 'Please select a valid CSV file',
  PROCESSING_ERROR: 'Error processing file',
  RESET_CONFIRMATION: 'Are you sure you want to reset all edits?',
  WELCOME_TITLE: 'Welcome to Book Data Manager!',
  WELCOME_MESSAGE: 'Upload a CSV file or generate sample data to get started. Your CSV should have columns: Title, Author, Genre, PublishedYear, ISBN'
};