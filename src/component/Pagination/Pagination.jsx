import styles from './Pagination.module.css';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const PAGE_LIMIT = 5;

  const currentGroup = Math.floor((currentPage - 1) / PAGE_LIMIT);
  const startPage = currentGroup * PAGE_LIMIT + 1;
  const endPage = Math.min(startPage + PAGE_LIMIT - 1, totalPages);

  const pageNumbers = Array.from(
    {
      length: Math.max(0, endPage - startPage + 1),
    },
    (_, i) => startPage + i,
  );

  return (
    <nav className={styles.pagination} aria-label="게시물 페이지">
      <button
        type="button"
        disabled={startPage === 1}
        onClick={() => onPageChange(startPage - 1)}
      >
        <img src="./src/assets/leftArrow.png" alt="leftArrow" />
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPageChange(pageNumber)}
          className={currentPage === pageNumber ? styles.active : undefined}
          aria-current={currentPage === pageNumber ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}
      <button
        type="button"
        disabled={endPage >= totalPages}
        onClick={() => onPageChange(endPage + 1)}
      >
        <img src="./src/assets/RightArrow.png" alt="RightArrow" />
      </button>
    </nav>
  );
}
