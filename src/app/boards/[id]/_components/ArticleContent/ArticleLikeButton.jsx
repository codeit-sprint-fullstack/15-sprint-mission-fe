import icHeart from '@/assets/boards/ic_heart.svg';
import Image from 'next/image';
import * as styles from './ArticleLikeButton.css';

function ArticleLikeButton({ id }) {
  return (
    <button className={styles.container}>
      <Image className={styles.likeIcon} src={icHeart} alt="하트 아이콘" />
      <span className={styles.likeCount}>123</span>
    </button>
  );
}

export default ArticleLikeButton;
