import styles from "./ProductLoading.module.css";

export default function ProductLoading({ productsPerPage }) {
  return (
    <ul className={`${styles.cardList} ${variant ? styles[variant] : ""}`}>
      {Array.from({ length: productsPerPage }, (_, i) => (
        <li key={i} className={styles.card}>
          <div className={styles.image}></div>
          <div className={styles.description}></div>
          <div className={styles.price}></div>
          <div className={styles.favoriteCount}></div>
        </li>
      ))}
    </ul>
  );
}
