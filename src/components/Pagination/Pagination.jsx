import styles from "./Pagination.module.css";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  pageGroupSize = 5,
}) {
  // 현재 페이지가 속한 그룹의 시작 페이지 번호 계산
  const currentGroup = Math.ceil(currentPage / pageGroupSize);
  const startPage = (currentGroup - 1) * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const goToPrevGroup = () => {
    onPageChange(Math.max(startPage - 1, 1));
  };

  const goToNextGroup = () => {
    onPageChange(Math.min(endPage + 1, totalPages));
  };

  return (
    <nav className={styles.paginationContainer}>
      <button type="button" onClick={goToPrevGroup} disabled={startPage === 1}>
        &lt;
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPageChange(pageNumber)}
          aria-current={currentPage === pageNumber ? "page" : undefined}
          className={currentPage === pageNumber ? styles.selected : ""}
        >
          {pageNumber}
        </button>
      ))}

      <button
        type="button"
        onClick={goToNextGroup}
        disabled={endPage === totalPages}
      >
        &gt;
      </button>
    </nav>
  );
}
