import styles from './ShowProductsList.module.css';

export function ShowProductsList({ posts, gridStyle, imageSize }) {
  return (
    <div>
      <ul className={`${styles.listGrid} ${gridStyle || ''}`}>
        {posts.map(({ id, name, price, favoriteCount, images }) => (
          <li key={id}>
            <div>
              <img src={images} className={`${styles.imageSize} ${imageSize || ''}`} loading="lazy" />
              <p className={styles.name}>{name}</p>
              <p className={styles.price}>{price}원</p>
              <p className={styles.favorite}><img src='ic_heart.svg' alt = '하트'/>{favoriteCount}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
