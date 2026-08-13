import { useEffect, useState } from "react"
import { getProducts } from "../api/marketApi"
import ic_search from "../assets/ic_search.svg"
import MarketPagination from "./MarketPagination"
import ProductItem from "./ProductItem"
import styles from "./sellProducts.module.css"

const PAGE_SIZE = 10

function SellProducts() {
  const [isLoading, setIsLoading] = useState(false)
  const [productsData, setProductsData] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const data = await getProducts({
          page: currentPage,
          pageSize: PAGE_SIZE,
        })
        setProductsData(data.list)
        setTotalCount(data.totalCount)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [currentPage])

  if (error) return <div>에러 발생: {error}</div>

  return (
    <section className={styles.container}>
      {/* 타이틀 */}
      <div className={styles.sell_title_wrapper}>
        <span className={styles.section_title}>판매 중인 상품</span>
        <div className={styles.controlls}>
          <div className={styles.search_wrapper}>
            <img src={ic_search} />
            <input type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <button>상품 등록하기</button>
          <select></select>
        </div>
      </div>
      <div>
        <div className={styles.sell_products}>
          {isLoading ? (
            <div>로딩중...</div>
          ) : (
            productsData.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))
          )}
        </div>
        <MarketPagination
          pageSize={PAGE_SIZE}
          totalCount={totalCount}
          currentPage={currentPage}
          setCurrentPage={(selectedPage) => {setCurrentPage(selectedPage)}}
        />
      </div>
    </section>
  )
}

export default SellProducts
