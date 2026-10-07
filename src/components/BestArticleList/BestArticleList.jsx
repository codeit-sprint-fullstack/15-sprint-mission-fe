import Image from "next/image";
import tempImg from "@/assets/logo.png";
import styles from "./BestArticleList.module.css";
import bestBadge from "@/assets/best_badge.svg";
import { formatDate } from "@/utils/formatTime";
import likeIcon from "@/assets/likeIcon.svg";

export default function BestArticleList({ list }) {
  return (
    <ul className={styles.bestList}>
      {list.map((value) => (
        <li key={value.id} className={styles.bestCard}>
          <Image
            src={bestBadge}
            alt="베스트 뱃지"
            width={102}
            className={styles.bestBadge}
          />
          <div className={styles.title}>{value.title}</div>
          <Image
            src={tempImg}
            alt="게시글 사진"
            width={72}
            height={72}
            className={styles.image}
          />
          <div className={styles.user}>
            <span className={styles.username}>총명한 판다</span>
            <span className={styles.likeIcon}>
              <Image src={likeIcon} alt="" aria-hidden width={16} height={16} />
            </span>
            <span className={styles.likecount}>9999+</span>
          </div>

          <div className={styles.createdAt}>{formatDate(value.createdAt)}</div>
        </li>
      ))}
    </ul>
  );
}
