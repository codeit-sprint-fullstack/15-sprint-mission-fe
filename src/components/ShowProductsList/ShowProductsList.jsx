import styles from './ShowProductsList.module.css';


export function ShowProductsList({ posts }) {
  return (
    <div className={styles.listBody}>
      <ul className={styles.listGrid}>
        {posts.map(({ _id, name, price, img }) => (
          <li key={_id}>
            <div>
              <img
                src={img}
                className={styles.imageSize}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'comment-empty.png';
                }}
              />
              <p className={styles.name}>{name}</p>
              <p className={styles.price}>{price}원</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
