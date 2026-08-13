import { useEffect, useState } from "react"
import { getBestProducts } from "../api/marketApi"
import ProductItem from "./ProductItem"
import styles from "./bestProducts.module.css"

function BestProducts() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBestProducts = async () => {
      setIsLoading(true)
      try {
        const page = Math.floor(Math.random() * 10) + 1
        const pageSize = 4
        const pageData = await getBestProducts(page, pageSize)
        setProducts(pageData)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchBestProducts()
  }, [])

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
