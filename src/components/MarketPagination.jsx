import arrow_left from "../assets/arrow_left.svg"
import arrow_right from "../assets/arrow_right.svg"
import styles from "./MarketPagination.module.css"

const PAGE_LIMIT = 5 // 💡 한 화면에 노출할 최대 페이지 버튼 개수

function MarketPagination({
  pageSize,
  totalCount,
  currentPage,
  setCurrentPage,
}) {
  // 1. 전체 페이지 수 계산
  const totalPages = Math.ceil(totalCount / pageSize)

  // 2. 현재 페이지 기준 5개 범위 슬라이딩 연산 함수
  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(PAGE_LIMIT / 2))
    let endPage = startPage + PAGE_LIMIT - 1

    // 끝 페이지가 전체 페이지를 초과할 경우 보정
    if (endPage > totalPages) {
      endPage = totalPages
      startPage = Math.max(1, endPage - PAGE_LIMIT + 1)
    }

    const pages = []
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }

  const pageNumbers = getPageNumbers()

  const handleLeftMove = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleRightMove = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  if (totalPages <= 1) return null 

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.pagination}>
        {/* 이전 페이지 버튼 */}
        <button
          type="button"
          onClick={handleLeftMove}
          disabled={currentPage === 1}
          className={styles.pagination_btn}
        >
          <img src={arrow_left} alt="이전 페이지로 이동" />
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            className={`${styles.pagination_btn} ${
              currentPage === page ? styles.selected : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={handleRightMove}
          disabled={currentPage === totalPages}
          className={styles.pagination_btn}
        >
          <img src={arrow_right} alt="다음 페이지로 이동" />
        </button>
      </div>
    </div>
  )
}

export default MarketPagination
