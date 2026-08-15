import { fetchProducts } from "@/api/marketApi"
import ic_search from "@/assets/ic_search.svg"
import useWindowSize from "@/hooks/useWindowSize"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router"
import MarketOrderBySelect from "./MarketOrderBySelect"
import MarketPagination from "./MarketPagination"
import ProductItem from "./ProductItem"
import styles from "./SellProducts.module.css"

const INITIAL_PAGE = 1
const INITIAL_PAGE_SIZE = 10
const INITIAL_TOTAL_COUNT = 0
const SELECT_OPTIONS = [
  { name: "최신순", value: "recent" },
  { name: "좋아요순", value: "favorite" },
]
const BREAK_POINT_TABLET = 744
const BREAK_POINT_MOBILE = 375

function SellProducts() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [productsData, setProductsData] = useState([])
  const [totalCount, setTotalCount] = useState(INITIAL_TOTAL_COUNT)
  const [error, setError] = useState(null)
  const [inputKeyword, setInputKeyword] = useState(
    searchParams.get("keyword") || "",
  )

  const windowWidth = useWindowSize()
  const navigate = useNavigate()

  const isTablet = windowWidth <= BREAK_POINT_TABLET
  const isMobile = windowWidth <= BREAK_POINT_MOBILE

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      try {
        const data = await fetchProducts({
          page: searchParams.get("page") || INITIAL_PAGE,
          pageSize: isMobile ? 4 : isTablet ? 6 : INITIAL_PAGE_SIZE,
          orderBy: searchParams.get("orderBy") || SELECT_OPTIONS[0].value,
          keyword: searchParams.get("keyword") || "",
        })
        setProductsData(data.list)
        setTotalCount(data.totalCount)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getProducts()
  }, [searchParams, isTablet, isMobile])

  const handleSearchChange = (e) => {
    setInputKeyword(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (!inputKeyword) return
    if (e.key === "Enter" && inputKeyword !== searchParams.get("keyword")) {
      const newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set("keyword", inputKeyword)
      newSearchParams.set("page", 1)
      setSearchParams(newSearchParams)
    }
  }

  const handleOptionChange = (option) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set("orderBy", option.value)
    newSearchParams.set("page", 1)
    setSearchParams(newSearchParams)
  }

  const handlePagination = (selectedPage) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set("page", selectedPage)
    setSearchParams(newSearchParams)
  }

  const handleRegister = () => {
    navigate("/product-register")
  }

  if (error) return <div>에러 발생: {error}</div>

  return (
    <section className={styles.container}>
      <div className={styles.sell_title_wrapper}>
        <span className={styles.section_title}>판매 중인 상품</span>
        <div className={styles.controlls}>
          <div className={styles.search_wrapper}>
            <img src={ic_search} />
            <input
              type="text"
              value={inputKeyword}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <button onClick={handleRegister}>상품 등록하기</button>
          <MarketOrderBySelect
            options={SELECT_OPTIONS}
            selected={searchParams.get("orderBy") || SELECT_OPTIONS[0].value}
            handleOptionChange={handleOptionChange}
          />
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
          pageSize={INITIAL_PAGE_SIZE}
          totalCount={totalCount}
          currentPage={Number(searchParams.get("page")) || INITIAL_PAGE}
          setCurrentPage={handlePagination}
        />
      </div>
    </section>
  )
}

export default SellProducts
