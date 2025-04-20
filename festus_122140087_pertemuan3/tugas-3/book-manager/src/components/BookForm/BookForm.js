import { useState, useContext } from 'react';
import { useBooks } from '../../context/BookContext';
import PropTypes from 'prop-types';
import './BookForm.css';

function BookForm({ initialData, onCancel }) {
  const { addBook, updateBook } = useBooks();
  const [book, setBook] = useState(initialData || { 
    title: '', 
    author: '', 
    status: 'owned' 
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    try {
      if (initialData) {
        updateBook(initialData.id, book);
      } else {
        addBook(book);
      }
      onCancel?.();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Judul:</label>
        <input 
          type="text" 
          value={book.title}
          onChange={(e) => setBook({...book, title: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label>Penulis:</label>
        <input 
          type="text" 
          value={book.author}
          onChange={(e) => setBook({...book, author: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label>Status:</label>
        <select 
          value={book.status}
          onChange={(e) => setBook({...book, status: e.target.value})}
        >
          <option value="owned">Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit">{initialData ? 'Update' : 'Tambah'} Buku</button>
        {onCancel && <button type="button" onClick={onCancel} className="cancel-btn">Batal</button>}
      </div>
    </form>
  );
}

BookForm.propTypes = {
  initialData: PropTypes.object,
  onCancel: PropTypes.func
};

export default BookForm;