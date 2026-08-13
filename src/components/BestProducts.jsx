import ProductItem from "./ProductItem"
import styles from "./bestProduct.module.css"

function BestProducts() {
  return (
    <section>
      {/* 타이틀 */}
      <span className={styles.section_title}>베스트 상품</span>
      {/* 상품영역 */}
      <div className={styles.best_products}>
        {Array.from({ length: 4 }, (_, i) => i).map((_) => (
          <ProductItem />
        ))}
      </div>
    </section>
  )
}

export default BestProducts
