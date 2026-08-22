import { useParams } from 'react-router-dom';
import { useGetPostById } from '../hooks/useGetPostById';
import { LoadingSpinner } from '../components/LoadingSpinner';
import styles from '../styles/ProductDetails.module.css';

export function ProductDetails() {
  const { productId } = useParams();
  console.log('표시할ID:', productId);
  const { post } = useGetPostById(productId);
  console.log('상세페이지 표시데이터', post);

  if (!post) return <LoadingSpinner />;

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>제품상세보기</h1>
      <img
        src={post.img}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'comment-empty.png';
        }}
        className={styles.imageSize}
      />
      <p className={styles.name}>상품명: {post.name}</p>
      <p className={styles.ment}>상품소개: {post.description}</p>
      <p className={styles.ment}>판매가격: {post.price}원</p>
      {post.tags.map((tag, index) => (
        <span key={index} className={styles.ment}>
          #{tag}{' '}
        </span>
      ))}
    </div>
  );
}
