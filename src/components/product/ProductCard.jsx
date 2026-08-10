//# 상품 카드 (베스트/전체 공통 재사용)
import styles from './ProductCard.module.css';

export default function ProductCard({imageUrl,name,price,favoriteCount}){
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={name}/>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price.toLocaleString()}원</p>
        <div className={styles.favorite}>
          <span>♡</span>
          <span>{favoriteCount}</span>
        </div>
      </div>
    </div>
  );

}