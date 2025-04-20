import { render, screen } from '@testing-library/react';
import Stats from './Stats';
import { BookProvider } from '../../context/BookContext';

describe('Stats Page', () => {
  const MockProvider = ({ children, initialBooks }) => (
    <BookProvider initialBooks={initialBooks}>{children}</BookProvider>
  );

  it('displays correct stats with no books', () => {
    render(<Stats />, { wrapper: MockProvider });
    
    expect(screen.getByText('Total Buku')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument(); // Total books
    expect(screen.getAllByText('0')).toHaveLength(4); // All stats should be 0
  });

  it('displays correct stats with books', () => {
    const books = [
      { id: 1, title: 'Book 1', author: 'Author 1', status: 'owned' },
      { id: 2, title: 'Book 2', author: 'Author 2', status: 'owned' },
      { id: 3, title: 'Book 3', author: 'Author 3', status: 'reading' },
      { id: 4, title: 'Book 4', author: 'Author 4', status: 'wishlist' }
    ];
    
    render(
      <MockProvider initialBooks={books}>
        <Stats />
      </MockProvider>
    );

    expect(screen.getByText('4')).toBeInTheDocument(); // Total books
    expect(screen.getByText('2')).toBeInTheDocument(); // Owned
    expect(screen.getByText('1')).toBeInTheDocument(); // Reading
    expect(screen.getByText('1')).toBeInTheDocument(); // Wishlist
  });
});