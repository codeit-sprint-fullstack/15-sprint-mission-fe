import Image from "next/image";
import { formatRelativeTime } from "@/lib/formatDate.js";
import * as styles from "./CommentItem.css.js";

export default function CommentItem({ comment }) {
  return (
    <li className={styles.container}>
      <div className={styles.group}>
        <p className={styles.content}>{comment.content}</p>
      </div>
      <div className={styles.writer}>
        <Image
          src={comment.writer.image ?? "/icon/profile.svg"}
          alt="프로필 이미지"
          width={32}
          height={32}
        />
        <div className={styles.info}>
          <span className={styles.nickname}>{comment.writer.nickname}</span>
          <time className={styles.date} dateTime={comment.createdAt}>
            {formatRelativeTime(comment.createdAt)}
          </time>
        </div>
      </div>
    </li>
  );
}
