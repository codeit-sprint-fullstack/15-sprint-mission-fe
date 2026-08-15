import ic_search from "@/assets/ic_search.svg"
import { useState } from "react"
import { useNavigate } from "react-router"
import useMarketProduct from "../../../hooks/useMarketProducts"
import MarketOrderBySelect from "./MarketOrderBySelect"
import MarketPagination from "./MarketPagination"
import ProductItem from "./ProductItem"
import styles from "./SellProducts.module.css"

function SellProducts() {
  const {
    isLoading,
    productsData,
    searchParams,
    setSearchParams,
    totalCount,
    error,
    currentPageSize,
    INITIAL_PAGE,
    SELECT_OPTIONS,
  } = useMarketProduct()

  const [inputKeyword, setInputKeyword] = useState(
    searchParams.get("keyword") || "",
  )

  const navigate = useNavigate()

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
          pageSize={currentPageSize}
          totalCount={totalCount}
          currentPage={Number(searchParams.get("page")) || INITIAL_PAGE}
          setCurrentPage={handlePagination}
        />
      </div>
    </section>
  )
}

export default SellProducts
