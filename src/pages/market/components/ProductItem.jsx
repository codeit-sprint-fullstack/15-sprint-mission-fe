import ic_heart from "../../../assets/ic_heart.svg"
import styles from "./ProductItem.module.css"

function ProductItem({ images, name, price }) {
  return (
    <div>
      <div className={styles.image_wrapper}>
        <img src={images} alt="상품 이미지" />
      </div>
      <div className={styles.product_info}>
        <p className={styles.product_title}>{name}</p>
        <p className={styles.product_price}>
          {Number(price).toLocaleString()}원
        </p>
        <div className={styles.like_wrppaer}>
          <img src={ic_heart} alt="좋아요 등록" />
          123
        </div>
      </div>
    </div>
  )
}

export default ProductItem
