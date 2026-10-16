import * as styles from "./BestArticleCard.css.js";
import Image from "next/image";
import Link from "next/link.js";
import thumbnail from "@/assets/images/thumbnail.svg";
import { formatDate } from "@/lib/utils/formatDate.js";
import badgeImage from "@/assets/images/badge-image.svg";

export default function BestArticleCard({ article }) {
  const { title, createdAt } = article;
  const formattedDate = formatDate(createdAt);

  return (
    <Link href={`/articles/${article.id}`}>
      <div className={styles.container}>
        <Image src={badgeImage} alt="베스트 배지" className={styles.badge} />
        <div className={styles.titleGroup}>
          <p className={styles.title}>{title}</p>
          <Image src={thumbnail} className={styles.thumbnail} alt="썸네일" />
        </div>
        <div className={styles.articleInfoGroup}>
          <div className={styles.authorAndLikesGroup}>
            <span>총명한 판다</span>
            <span>♡ 9999+</span>
          </div>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
}
