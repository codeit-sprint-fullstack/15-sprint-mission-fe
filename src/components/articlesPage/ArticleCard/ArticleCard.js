import * as styles from "./ArticleCard.css";
import Image from "next/image";
import Link from "next/link";
import thumbnail from "@/assets/images/thumbnail.svg";
import icProfile from "@/assets/images/ic-profile.svg";
import { formatDate } from "@/lib/utils/formatDate";

export default function ArticleCard({ article }) {
  const { title, createdAt } = article;
  const formattedDate = formatDate(createdAt);

  return (
    <Link href={`/articles/${article.id}`}>
      <div className={styles.articleCardBox}>
        <div className={styles.titleAndProfileInfoBox}>
          <h3>{title}</h3>
          <div className={styles.profileInfoBox}>
            <Image src={icProfile} alt="프로필 아이콘" width={24} height={24} />
            <span className={styles.author}>총명한 판다</span>
            <span className={styles.date}>{formattedDate}</span>
          </div>
        </div>

        <div className={styles.thumbnailAndLikesInfoBox}>
          <Image
            src={thumbnail}
            className={styles.thumbnail}
            alt="썸네일"
            width={72}
            height={72}
          />
          <span className={styles.likes}>♡ 9999+</span>
        </div>
      </div>
    </Link>
  );
}
