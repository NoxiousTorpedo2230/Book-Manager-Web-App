export const generateFakeBookData = (count = 10000) => {
  const genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Romance', 'Thriller', 'Biography', 'History', 'Self-Help'];
  const authors = [
    'Jane Austen', 'Mark Twain', 'Charles Dickens', 'Virginia Woolf', 'Ernest Hemingway',
    'Maya Angelou', 'Toni Morrison', 'Stephen King', 'Agatha Christie', 'J.K. Rowling',
    'George Orwell', 'Harper Lee', 'F. Scott Fitzgerald', 'William Shakespeare', 'Leo Tolstoy',
    'Emily Dickinson', 'Walt Whitman', 'Edgar Allan Poe', 'Oscar Wilde', 'Charlotte Brontë'
  ];
  
  const titleWords = ['The', 'A', 'An', 'Chronicles', 'Tales', 'Story', 'Adventures', 'Secrets', 'Mystery', 'Legend'];
  const titleNouns = ['Garden', 'House', 'Road', 'River', 'Mountain', 'Forest', 'City', 'Castle', 'Bridge', 'Journey'];
  
  const books = [];
  
  for (let i = 0; i < count; i++) {
    const title = `${titleWords[Math.floor(Math.random() * titleWords.length)]} ${titleNouns[Math.floor(Math.random() * titleNouns.length)]} ${i + 1}`;
    const author = authors[Math.floor(Math.random() * authors.length)];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const publishedYear = Math.floor(Math.random() * (2024 - 1800) + 1800);
    const isbn = `978-${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 90000) + 10000}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9)}`;
    
    books.push({
      id: i + 1,
      Title: title,
      Author: author,
      Genre: genre,
      PublishedYear: publishedYear,
      ISBN: isbn,
      modified: false
    });
  }
  
  return books;
};