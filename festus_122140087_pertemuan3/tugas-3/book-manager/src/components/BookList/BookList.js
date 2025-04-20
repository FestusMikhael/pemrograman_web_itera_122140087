import { useState } from 'react';
import { useBooks } from '../../context/BookContext';
import BookForm from '../BookForm/BookForm';
import PropTypes from 'prop-types';
import './BookList.css';

function BookList() {
  const { filteredBooks, deleteBook } = useBooks();
  const [editingBook, setEditingBook] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      deleteBook(id);
    }
  };

  return (
    <div className="book-list">
      {editingBook ? (
        <BookForm 
          initialData={editingBook} 
          onCancel={() => setEditingBook(null)} 
        />
      ) : (
        <ul>
          {filteredBooks.map(book => (
            <li key={book.id} className="book-item">
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">Penulis: {book.author}</p>
                <p className={`status ${book.status}`}>
                  Status: {getStatusLabel(book.status)}
                </p>
              </div>
              <div className="book-actions">
                <button 
                  onClick={() => setEditingBook(book)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(book.id)}
                  className="delete-btn"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function getStatusLabel(status) {
  switch(status) {
    case 'owned': return 'Dimiliki';
    case 'reading': return 'Sedang Dibaca';
    case 'wishlist': return 'Ingin Dibeli';
    default: return status;
  }
}

export default BookList;