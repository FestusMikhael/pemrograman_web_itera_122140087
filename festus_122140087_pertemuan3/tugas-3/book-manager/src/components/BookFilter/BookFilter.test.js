import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';
import { BookProvider } from '../../context/BookContext';

describe('BookFilter', () => {
  const MockProvider = ({ children }) => (
    <BookProvider>{children}</BookProvider>
  );

  it('renders search input and filter select', () => {
    render(<BookFilter />, { wrapper: MockProvider });
    expect(screen.getByPlaceholderText(/cari buku/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('all')).toBeInTheDocument();
  });

  it('updates search query on input change', () => {
    render(<BookFilter />, { wrapper: MockProvider });
    const input = screen.getByPlaceholderText(/cari buku/i);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('updates filter on select change', () => {
    render(<BookFilter />, { wrapper: MockProvider });
    const select = screen.getByDisplayValue('all');
    fireEvent.change(select, { target: { value: 'owned' } });
    expect(select.value).toBe('owned');
  });
});