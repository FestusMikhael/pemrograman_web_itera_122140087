import { useBooks } from '../../context/BookContext';
import PropTypes from 'prop-types';
import './BookFilter.css';

function BookFilter() {
  const { filter, setFilter, searchQuery, setSearchQuery } = useBooks();

  return (
    <div className="book-filter">
      <input
        type="text"
        placeholder="Cari buku berdasarkan judul atau penulis..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="all">Semua Buku</option>
        <option value="owned">Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>
    </div>
  );
}

export default BookFilter;