import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Statistik')).toBeInTheDocument();
  });

  it('navigates between pages', async () => {
    render(<App />);
    
    // Home page should be rendered by default
    expect(screen.getByText('Manajemen Buku Pribadi')).toBeInTheDocument();
    
    // Click stats link
    fireEvent.click(screen.getByText('Statistik'));
    
    // Stats page should be rendered
    expect(await screen.findByText('Statistik Buku')).toBeInTheDocument();
  });
});