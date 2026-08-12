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
    <nav>
      <button onClick={handlePrevGroup} disabled={startPage === 1}>
        이전
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          aria-current={currentPage === pageNumber ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={handleNextGroup} disabled={endPage === totalPages}>
        다음
      </button>
    </nav>
  );
}
