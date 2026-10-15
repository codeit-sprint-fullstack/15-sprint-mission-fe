import boardsItemDummy from '@/assets/boards/boards_item_dummy.svg';
import icHeart from '@/assets/boards/ic_heart.svg';
import icMedal from '@/assets/boards/ic_medal.svg';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './BestArticleItem.css';

function BestArticleItem({ id, title, content, createdAt }) {
  return (
    <Link href={`/boards/${id}`} className={styles.container}>
      {/* 라벨 */}
      <div className={styles.label}>
        <Image src={icMedal} alt="베스트 라벨 아이콘" />
        Best
      </div>
      {/* 컨텐츠 영역 */}
      <div className={styles.content}>
        {/* 아이템 정보 */}
        <div className={styles.itemInfoContent}>
          <p className={styles.itemTitle}>{title}</p>
          <div>
            <Image src={boardsItemDummy} alt="게시글 이미지" />
          </div>
        </div>
        {/* 아티클 정보 */}
        <div className={styles.articleInfoContent}>
          {/* 작성자 정보 */}
          <div className={styles.articleInfoUser}>
            <p className={styles.articleInfoUserName}>총명한판다</p>
            <div className={styles.articleInfoLikeContainer}>
              <Image src={icHeart} alt="하트 아이콘" />
              9999+
            </div>
          </div>
          {/* 작성일 */}
          <p className={styles.articleInfoDate}>{createdAt}</p>
        </div>
      </div>
    </Link>
  );
}

export default BestArticleItem;
