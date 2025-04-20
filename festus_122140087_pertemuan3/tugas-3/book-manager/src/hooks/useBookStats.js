import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

export function useBookStats() {
  const { books } = useContext(BookContext);
  
  const totalBooks = books.length;
  const ownedBooks = books.filter(book => book.status === 'owned').length;
  const readingBooks = books.filter(book => book.status === 'reading').length;
  const wishlistBooks = books.filter(book => book.status === 'wishlist').length;

  return {
    totalBooks,
    ownedBooks,
    readingBooks,
    wishlistBooks
  };
}