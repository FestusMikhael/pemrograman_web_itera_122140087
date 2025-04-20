import { useBookStats } from '../../hooks/useBookStats';
import './Stats.css';

function Stats() {
  const { totalBooks, ownedBooks, readingBooks, wishlistBooks } = useBookStats();

  return (
    <div className="stats-page">
      <h1>Statistik Buku</h1>
      <div className="stats-grid">
        <div className="stat-card total">
          <h2>Total Buku</h2>
          <p>{totalBooks}</p>
        </div>
        <div className="stat-card owned">
          <h2>Dimiliki</h2>
          <p>{ownedBooks}</p>
        </div>
        <div className="stat-card reading">
          <h2>Sedang Dibaca</h2>
          <p>{readingBooks}</p>
        </div>
        <div className="stat-card wishlist">
          <h2>Ingin Dibeli</h2>
          <p>{wishlistBooks}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;