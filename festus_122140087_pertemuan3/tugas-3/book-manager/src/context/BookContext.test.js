import { renderHook, act } from '@testing-library/react-hooks';
import { BookProvider, useBooks } from './BookContext';

describe('BookContext', () => {
  it('should add a book', () => {
    const wrapper = ({ children }) => <BookProvider>{children}</BookProvider>;
    const { result } = renderHook(() => useBooks(), { wrapper });

    act(() => {
      result.current.addBook({ title: 'Test Book', author: 'Test Author', status: 'owned' });
    });

    expect(result.current.books).toHaveLength(1);
    expect(result.current.books[0].title).toBe('Test Book');
  });

  it('should throw error when adding book with empty title or author', () => {
    const wrapper = ({ children }) => <BookProvider>{children}</BookProvider>;
    const { result } = renderHook(() => useBooks(), { wrapper });

    expect(() => {
      act(() => {
        result.current.addBook({ title: '', author: '', status: 'owned' });
      });
    }).toThrow('Judul dan penulis harus diisi');
  });

  it('should filter books', () => {
    const wrapper = ({ children }) => <BookProvider>{children}</BookProvider>;
    const { result } = renderHook(() => useBooks(), { wrapper });

    act(() => {
      result.current.addBook({ title: 'Book 1', author: 'Author 1', status: 'owned' });
      result.current.addBook({ title: 'Book 2', author: 'Author 2', status: 'reading' });
      result.current.setFilter('reading');
    });

    expect(result.current.filteredBooks).toHaveLength(1);
    expect(result.current.filteredBooks[0].status).toBe('reading');
  });
});