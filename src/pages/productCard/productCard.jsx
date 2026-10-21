import favoriteIcon from "../../assets/ic_heart.svg";
import styles from "./ProductCard.module.css";
import defaultImg from "../../assets/img_default.svg";

export function ProductCard({ product }) {
  const imageSrc = product.images?.[0] || defaultImg;
  return (
    <div className={styles.productCardContainer}>
      <img src={imageSrc} alt="상품 이미지" />
      <div className={styles.productCardContent}>
        <h3>{product.name}</h3>
        <h2>{product.price}원</h2>
        <div className={styles.favoriteContainer}>
          <img src={favoriteIcon} alt="좋아요 아이콘" />
          <p>{product.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}
