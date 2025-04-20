import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import { BookProvider } from '../../context/BookContext';

describe('BookForm', () => {
  const MockProvider = ({ children }) => (
    <BookProvider>{children}</BookProvider>
  );

  it('renders form fields', () => {
    render(<BookForm />, { wrapper: MockProvider });
    expect(screen.getByLabelText('Judul:')).toBeInTheDocument();
    expect(screen.getByLabelText('Penulis:')).toBeInTheDocument();
    expect(screen.getByLabelText('Status:')).toBeInTheDocument();
  });

  it('shows error when submitting empty form', async () => {
    render(<BookForm />, { wrapper: MockProvider });
    fireEvent.click(screen.getByText('Tambah Buku'));
    expect(await screen.findByText('Judul dan penulis harus diisi')).toBeInTheDocument();
  });

  it('pre-fills form when editing', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      status: 'reading'
    };
    render(<BookForm initialData={book} />, { wrapper: MockProvider });
    
    expect(screen.getByDisplayValue('Test Book')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Author')).toBeInTheDocument();
    expect(screen.getByDisplayValue('reading')).toBeInTheDocument();
    expect(screen.getByText('Update Buku')).toBeInTheDocument();
  });
});