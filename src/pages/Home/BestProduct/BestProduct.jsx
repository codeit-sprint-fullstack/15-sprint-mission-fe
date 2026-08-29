import styles from "./BestProduct.module.css";

export function BestProductItem({
  image,
  price,
  name,
  description,
  favoriteCount,
}) {
  return (
    <li>
      <img className={styles.bestProductImg} src={image} alt={name} />
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
      <p className={styles.favoriteCount}>{favoriteCount}</p>
    </li>
  );
}
