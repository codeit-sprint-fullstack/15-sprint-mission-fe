import Image from "next/image";
import Link from "next/link";
import defaultImg from "@/assets/image 71.png";
import profileImg from "@/assets/ic_profile.svg";
import heartImg from "@/assets/ic_heart.svg";
import BestImg from "@/assets/ic_medal.svg";
import * as styles from "./ArticleItem.css.js";

//게시글 제목, 작성자, 작성날짜, 사진
export default function ArticleItem({
  id,
  title,
  writer,
  createdAt,
  className,
}) {
  const articleTitle = title;
  const writerName = writer.name;
  const createDate = new Date(createdAt).toLocaleDateString();
  const containerClass =
    className === "list" ? styles.listContainer : styles.cardContainer;

  return (
    <Link href={`/articles/${id}`} className={containerClass}>
      {className !== "list" && (
        <span className={styles.bestSticker}>
          <Image src={BestImg} alt="BestImg" />
          Best
        </span>
      )}
      <div className={styles.header}>
        <div className={styles.title}>{articleTitle}</div>
        <Image
          src={defaultImg}
          alt="defaultImg"
          className={styles.defaultImg}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.userInfo}>
          {className === "list" && <Image src={profileImg} alt="profileImg" />}
          <div className={styles.userName}>{writerName}</div>
          <div className={styles.date}>{createDate}</div>
        </div>
        <div className={styles.like}>
          <Image src={heartImg} alt="heartImg" /> 999+
        </div>
      </div>
    </Link>
  );
}
