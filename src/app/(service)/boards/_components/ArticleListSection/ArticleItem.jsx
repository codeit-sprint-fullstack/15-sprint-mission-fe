import boardsItemDummy from '@/assets/boards/boards_item_dummy.svg';
import icHeart from '@/assets/boards/ic_heart.svg';
import icProfile from '@/assets/boards/ic_profile.svg';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './ArticleItem.css';

function ArticleItem({ id, title, content, createdAt }) {
  return (
    <Link href={`/boards/${id}`} className={styles.container}>
      <div className={styles.articleItemTop}>
        <p className={styles.articletTitle}>{title}</p>
        <Image src={boardsItemDummy} alt="상품 이미지" />
      </div>
      <div className={styles.articleItemBottom}>
        <div className={styles.articleUser}>
          <Image src={icProfile} alt="프로필 이미지" />
          <p className={styles.articleUserName}>총명한 판다</p>
          <p className={styles.articleCreatedAt}>{createdAt}</p>
        </div>
        <div className={styles.articleLike}>
          <Image src={icHeart} alt="하트 아이콘" />
          9999+
        </div>
      </div>
    </Link>
  );
}

export default ArticleItem;
