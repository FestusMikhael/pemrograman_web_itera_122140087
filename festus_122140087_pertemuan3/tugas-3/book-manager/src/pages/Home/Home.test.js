import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import { BookProvider } from '../../context/BookContext';

describe('Home Page', () => {
  const MockProvider = ({ children }) => (
    <BookProvider>{children}</BookProvider>
  );

  it('renders home page with title', () => {
    render(<Home />, { wrapper: MockProvider });
    expect(screen.getByText('Manajemen Buku Pribadi')).toBeInTheDocument();
  });

  it('toggles book form visibility', () => {
    render(<Home />, { wrapper: MockProvider });
    
    // Form should be hidden initially
    expect(screen.queryByText('Tambah Buku')).not.toBeInTheDocument();
    
    // Click the toggle button
    fireEvent.click(screen.getByText('+ Tambah Buku Baru'));
    
    // Form should be visible now
    expect(screen.getByText('Tambah Buku')).toBeInTheDocument();
    
    // Click again to hide
    fireEvent.click(screen.getByText('Tutup Form Tambah Buku'));
    
    // Form should be hidden again
    expect(screen.queryByText('Tambah Buku')).not.toBeInTheDocument();
  });
});