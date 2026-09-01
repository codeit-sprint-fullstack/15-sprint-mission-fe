import "../styles/Pagination.css";

function Pagination({ page, setPage, totalCount }) {
  const pageSize = 10;

  // 전체 상품 개수를 기준으로 필요한 페이지 수를 계산합니다.
  const totalPages = Math.ceil(totalCount / pageSize) || 1;

  // 페이지 번호를 담을 배열을 만듭니다.
  const pageCount = 5;

  // 현재 페이지를 기준으로 시작할 페이지 번호를 계산합니다.
  const startPage = Math.floor((page - 1) / pageCount) * pageCount + 1;

  // 현재 묶음의 마지막 페이지 번호를 계산합니다.
  const endPage = Math.min(startPage + pageCount - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );
  return (
    <div className="Pagination">
      {/* 이전 페이지 버튼입니다. */}
      <button
        className="page-arrow"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>

      {/* 페이지 번호를 하나씩 만들어줍니다. */}
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`page-number ${page === pageNumber ? "now" : ""}`}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {/* 다음 페이지 버튼입니다. */}
      <button
        className="page-arrow"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
