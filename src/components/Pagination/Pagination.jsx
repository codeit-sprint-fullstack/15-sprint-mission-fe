import styles from './Pagination.module.css';

export function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
  const PAGES_PER_GROUP = 5;
  const currentGroup = Math.ceil(currentPage / PAGES_PER_GROUP);
  const startPage = (currentGroup - 1) * PAGES_PER_GROUP + 1;
  const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const handlePrevGroup = () => {
    onPageChange(Math.max(startPage - 1, 1));
  };

  const handleNextGroup = () => {
    onPageChange(Math.min(endPage + 1, totalPages));
  };

  return (
    <nav className={styles.navBody}>
      <button onClick={handlePrevGroup} className={styles.button} disabled={startPage === 1}>
        &lt;
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? styles.activeButton : styles.button}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={handleNextGroup} className={styles.button} disabled={endPage === totalPages}>
        &gt;
      </button>
    </nav>
  );
}
