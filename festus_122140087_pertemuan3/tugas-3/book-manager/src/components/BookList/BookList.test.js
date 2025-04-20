import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';
import { BookProvider } from '../../context/BookContext';

describe('BookList', () => {
  const MockProvider = ({ children }) => (
    <BookProvider>{children}</BookProvider>
  );

  it('renders empty state when no books', () => {
    render(<BookList />, { wrapper: MockProvider });
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('renders books when available', () => {
    const books = [
      { id: 1, title: 'Book 1', author: 'Author 1', status: 'owned' },
      { id: 2, title: 'Book 2', author: 'Author 2', status: 'reading' }
    ];
    
    render(
      <BookProvider initialBooks={books}>
        <BookList />
      </BookProvider>
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
  });

  it('shows edit form when edit button clicked', () => {
    const books = [
      { id: 1, title: 'Book 1', author: 'Author 1', status: 'owned' }
    ];
    
    render(
      <BookProvider initialBooks={books}>
        <BookList />
      </BookProvider>
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(screen.getByText('Update Buku')).toBeInTheDocument();
  });
});