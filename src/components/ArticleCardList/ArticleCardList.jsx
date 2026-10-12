import Image from "next/image";
import sample from "@/assets/images/sample_image.svg";
import provileImg from "@/assets/icons/ic_profile.svg";
import styles from "./ArticleCardList.module.css";
import likeIcon from "@/assets/likeIcon.svg";
import { formatDate } from "@/utils/formatTime";
import Link from "next/link";

export default function ArticleCardList({ list }) {
  return (
    <ul className={styles.articleList}>
      {list.map((value) => (
        <li key={value.id}>
          <Link
            href={`/community-detail/${value.id}`}
            className={styles.articleCard}
          >
            <div className={styles.title}>{value.title}</div>
            <Image
              src={sample}
              alt="게시글 사진"
              width={48}
              height={44}
              className={styles.image}
            ></Image>

            <div className={styles.user}>
              <Image
                src={provileImg}
                alt="프로필 사진"
                width={24}
                height={24}
                className={styles.profile}
              />
              <span className={styles.username}>총명한 판다</span>
              <span className={styles.createdAt}>
                {formatDate(value.createdAt)}
              </span>
            </div>
            <div className={styles.liked}>
              <Image src={likeIcon} alt="" aria-hidden width={24} height={24} />
              <span>9999+</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
