import Image from "next/image";
import { CommentItem } from "@/components/board/CommentItem";
import * as styles from "./CommentList.css.js";

export default function CommentList({ comments }) {
  if (comments.length === 0) {
    return (
      <div className={styles.empty}>
        <Image
          src="/image/empty-comment.svg"
          alt="비어있는 코멘트 일러스트"
          width={140}
          height={140}
        />
        <p className={styles.text}>
          아직 댓글이 없어요.
          <br />
          지금 댓글을 달아보세요!
        </p>
      </div>
    );
  }

  return (
    <ul className={styles.container}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
