import Link from "next/link";
import Image from "next/image.js";
import * as styles from "./ArticleCard.css.js";
import { formatDate } from "@/lib/formatDate.js";

export default function ArticleCard({ article }) {
  return (
    <li className={styles.container}>
      <Link className={styles.card} href={`/board/${article.id}`}>
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
            <span className={styles.nickname}>
              <Image
                className={styles.thumbnailImg}
                src="/icon/profile.svg"
                alt="프로필 이미지"
                width={24}
                height={24}
              />
              총명한 판다
            </span>
            <time className={styles.date} dateTime={article.createdAt}>
              {formatDate(article.createdAt)}
            </time>
          </div>
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
      </Link>
    </li>
  );
}
