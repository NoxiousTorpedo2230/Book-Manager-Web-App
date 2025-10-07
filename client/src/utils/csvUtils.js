import Papa from 'papaparse';

export const parseCSVFile = (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: false,
      complete: (results) => {
        try {
          const processedData = results.data.map((row, index) => ({
            id: index + 1,
            Title: row.Title || '',
            Author: row.Author || '',
            Genre: row.Genre || '',
            PublishedYear: parseInt(row.PublishedYear) || 0,
            ISBN: row.ISBN || '',
            modified: false
          }));
          resolve(processedData);
        } catch (error) {
          reject(error);
        }
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};

export const downloadCSV = (data, filename = 'edited_books.csv') => {
  const csvData = data.map(({ id, modified, ...rest }) => rest);
  const csv = Papa.unparse(csvData);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};