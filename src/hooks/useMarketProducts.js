import { fetchProducts } from "@/api/marketApi"
import useWindowSize from "@/hooks/useWindowSize"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"

const INITIAL_PAGE = 1
const INITIAL_PAGE_SIZE = 10
const INITIAL_TOTAL_COUNT = 0
const SELECT_OPTIONS = [
  { name: "최신순", value: "recent" },
  { name: "좋아요순", value: "favorite" },
]
const BREAK_POINT_TABLET = 744
const BREAK_POINT_MOBILE = 375

const useMarketProduct = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [productsData, setProductsData] = useState([])
  const [totalCount, setTotalCount] = useState(INITIAL_TOTAL_COUNT)
  const [error, setError] = useState(null)

  const windowWidth = useWindowSize()

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

  return {
    isLoading,
    productsData,
    searchParams,
    setSearchParams,
    totalCount,
    error,
    INITIAL_PAGE,
    INITIAL_PAGE_SIZE,
    SELECT_OPTIONS,
  }
}

export default useMarketProduct
