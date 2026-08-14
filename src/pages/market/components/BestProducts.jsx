import { getProducts } from "@/api/marketApi"
import useWindowSize from "@/hooks/useWindowSize"
import { useEffect, useState } from "react"
import styles from "./BestProducts.module.css"
import ProductItem from "./ProductItem"

function BestProducts() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const windowWidth = useWindowSize()

  const isTablet = windowWidth <= 744
  const isMobile = windowWidth <= 375

  useEffect(() => {
    const fetchBestProducts = async () => {
      setIsLoading(true)
      try {
        const page = Math.floor(Math.random() * 10) + 1
        const pageSize = isMobile ? 1 : isTablet ? 2 : 4
        const pageData = await getProducts({
          page,
          pageSize,
          orderBy: "favorite",
        })
        setProducts(pageData.list)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchBestProducts()
  }, [isMobile, isTablet])

  if (error) return <div>에러 발생: {error}</div>
  return (
    <section className={styles.container}>
      <span className={styles.section_title}>베스트 상품</span>
      {isLoading ? (
        <div>로딩중 ...</div>
      ) : (
        <div className={styles.best_products}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default BestProducts
