import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState(() => {
    try {
      const savedBooks = localStorage.getItem('books');
      return savedBooks ? JSON.parse(savedBooks) : [];
    } catch (error) {
      console.error('Failed to load books from localStorage:', error);
      return [];
    }
  });

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('books', JSON.stringify(books));
    } catch (error) {
      console.error('Failed to save books to localStorage:', error);
    }
  }, [books]);

  const addBook = (newBook) => {
    if (!newBook.title || !newBook.author) {
      throw new Error('Judul dan penulis harus diisi');
    }
    setBooks(prevBooks => [...prevBooks, { ...newBook, id: Date.now() }]);
  };

  const updateBook = (id, updatedBook) => {
    setBooks(prevBooks => 
      prevBooks.map(book => 
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  };

  const deleteBook = (id) => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
  };
  
  const filteredBooks = books.filter(book => {
    const matchesFilter = filter === 'all' || book.status === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <BookContext.Provider value={{ 
      books, 
      filteredBooks, 
      addBook, 
      updateBook, 
      deleteBook, 
      filter, 
      setFilter, 
      searchQuery, 
      setSearchQuery 
    }}>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
}
