import styles from "./BestProductCard.module.css";
import favoriteIcon from "../../assets/ic_heart.svg";

export function BestProductCard({ product }) {
  return (
    <div className={styles.bestProductCardContainer}>
      <img className={styles.productImg} src={product.images[0]} />
      <div className={styles.bestProductCardContent}>
        <h3>{product.name}</h3>
        <h2>{product.price}원</h2>
        <div className={styles.favoriteContainer}>
          <img src={favoriteIcon} />
          <p>{product.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}
