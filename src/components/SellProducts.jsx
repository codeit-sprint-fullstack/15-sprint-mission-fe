import ProductItem from "./ProductItem"
import styles from "./sellProduct.module.css"

function SellProducts() {
  return (
    <section>
      {/* 타이틀 */}
      <div className={styles.sell_title_wrapper}>
        <span className={styles.section_title}>판매 중인 상품</span>
        <div>
          <input type="text" />
          <button>상품 등록하기</button>
          <select></select>
        </div>
      </div>
      {/* 상품영역 레퍼*/}
      <div>
        {/* 상품 */}
        <div className={styles.sell_products}>
          {Array.from({ length: 10 }, (_, i) => i).map((_) => (
            <ProductItem />
          ))}
        </div>
        {/* 페이지네이션 */}
      </div>
    </section>
  )
}

export default SellProducts
