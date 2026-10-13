import Link from "next/link";
import Image from "next/image";
import * as styles from "./BestArticleCard.css.js";
import { formatDate } from "@/lib/formatDate.js";

export default function BestArticleCard({ article }) {
  return (
    <li className={styles.container}>
      <Link className={styles.card} href={`/board/${article.id}`}>
        <Image
          src="/icon/best-badge.svg"
          alt="베스트 아이콘 로고"
          width={102}
          height={30}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{article.title}</h3>
          <div className={styles.thumbnail}>
            <Image
              className={styles.thumbnailImg}
              src="/image/board-img.png"
              alt="썸네일 이미지"
              width={48}
              height={48}
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.group}>
            <span className={styles.nickname}>총명한 판다</span>
            <span className={styles.like}>
              <Image
                src="/icon/heart.svg"
                alt="좋아요 아이콘"
                width={14}
                height={14}
              />
              9999+
            </span>
          </div>
          <time className={styles.date} dateTime={article.createdAt}>
            {formatDate(article.createdAt)}
          </time>
        </div>
      </Link>
    </li>
  );
}
