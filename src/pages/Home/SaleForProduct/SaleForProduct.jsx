//import { useState } from "react";

import styles from './SaleForProduct.module.css';

export function SaleForProductItem({
  image,
  price,
  name,
  favoriteCount,
  createdAt,
}) {
  console.log('createdAt:', createdAt);
  return (
    <li className={styles.product}>
      <img className={styles.productImg} src={image} alt={name} />
      <h4 className={styles.productName}>{name}</h4>
      <p className={styles.price}>{price}원</p>
      <p className={styles.favoriteCount}>{favoriteCount}</p>
    </li>
  );
}
