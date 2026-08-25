import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../LoadingSpinner';
import styles from './ShowProductsList.module.css';

export function ShowProductsList({ posts, isLoding, isSuccess }) {
  return (
    <>
      {isLoding ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <div className={styles.listBody}>
          <ul className={styles.listGrid}>
            {posts.map(({ _id, name, price, img, tags }) => (
              <li key={_id}>
                <div className={styles.eachBody}>
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
                  {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      #{tag}{' '}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.notFoundBody}>
          <p>제품을 찾을 수 없습니다...</p>
          <Link to="/item">목록으로 돌아가기</Link>
        </div>
      )}
    </>
  );
}
