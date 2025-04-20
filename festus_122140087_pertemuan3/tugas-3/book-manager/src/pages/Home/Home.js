import { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';
import './Home.css';

function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="home-page">
      <h1>Manajemen Buku Pribadi</h1>
      <BookFilter />
      <button 
        onClick={() => setShowForm(!showForm)}
        className="toggle-form-btn"
      >
        {showForm ? 'Tutup Form Tambah Buku' : '+ Tambah Buku Baru'}
      </button>
      {showForm && <BookForm onCancel={() => setShowForm(false)} />}
      <BookList />
    </div>
  );
}

export default Home;