import iconChevronLeft from "../assets/icon-chevron-left.svg";
import iconChevronRight from "../assets/icon-chevron-right.svg";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const pageNumbers = [];

  let startPage = currentPage - 2;

  if (startPage < 1) {
    startPage = 1;
  }

  let endPage = startPage + 4;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage -4;
  }

  if (startPage < 1) {
    startPage = 1;
  }

  for (let page = startPage; page <= endPage; page += 1) {
    pageNumbers.push(page);
  }

  return (
    <nav className="pagination" aria-label="상품 페이지">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
      >
        <img src={iconChevronLeft} alt="" />
      </button>

      {pageNumbers.map((page) => (
        <button
          type="button"
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="다음 페이지"
      >
        <img src={iconChevronRight} alt="" />
      </button>
    </nav>
  );
}

export default Pagination;