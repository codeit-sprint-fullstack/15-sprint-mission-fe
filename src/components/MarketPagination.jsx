import arrow_left from "../assets/arrow_left.svg"
import arrow_right from "../assets/arrow_right.svg"
import styles from "./MarketPagination.module.css"

function MarketPagination({
  pageSize,
  totalCount,
  currentPage,
  setCurrentPage,
}) {
  const handleLeftMove = () => {
    setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1)
  }

  const handleRightMove = () => {
    setCurrentPage(
      currentPage >= Math.ceil(totalCount / pageSize)
        ? Math.ceil(totalCount / pageSize)
        : currentPage + 1,
    )
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.pagination}>
        <div onClick={handleLeftMove} className={styles.pagination_btn}>
          <img src={arrow_left} alt="이전 페이지로  이동" />
        </div>
        {Array.from(
          { length: Math.ceil(totalCount / pageSize) },
          (_, i) => i + 1,
        ).map((i, idx) => (
          <div
            key={idx}
            className={`${styles.pagination_btn} ${currentPage === i ? styles.selected : ""}`}
            onClick={() => {
              setCurrentPage(i)
            }}
          >
            {i}
          </div>
        ))}
        <div onClick={handleRightMove} className={styles.pagination_btn}>
          <img src={arrow_right} alt="다음 페이지로 이동" />
        </div>
      </div>
    </div>
  )
}

export default MarketPagination
