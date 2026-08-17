//# 상품 카드 (베스트/전체 공통 재사용)
import styles from './ProductCard.module.css';

export default function ProductCard({ images, name, price, favoriteCount }) {
  const thumbnail = Array.isArray(images) ? images[0] : images;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={thumbnail} alt={name} loading="lazy" />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{(price ?? 0).toLocaleString()}원</p>
        <div className={styles.favorite}>
          <span>♡</span>
          <span>{favoriteCount ?? 0}</span>
        </div>
      </div>
    </div>
  );
}
