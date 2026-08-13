import ic_heart from "../assets/ic_heart.svg"
import productSample from "../assets/product-sample.png"
import styles from "./productItem.module.css"

function ProductItem() {
  return (
    <div>
      <div className={styles.image_wrapper}>
        <img src={productSample} />
      </div>
      <div className={styles.product_info}>
        <p className={styles.product_title}>아이패드 미니 팝니다</p>
        <p className={styles.product_price}>500,000원</p>
        <div className={styles.like_wrppaer}>
          <img src={ic_heart} alt="좋아요 등록" />
          좋아요
        </div>
      </div>
    </div>
  )
}

export default ProductItem
