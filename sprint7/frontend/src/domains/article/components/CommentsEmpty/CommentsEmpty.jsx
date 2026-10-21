import Image from "next/image";
import * as styles from "./CommentsEmpty.css";

export function CommentsEmpty() {
  return (
    <div className={styles.empty}>
      <Image
        src="/assets/board/Group_33742.svg"
        alt=""
        width={100}
        height={99}
      />
      <p>
        아직 댓글이 없어요,
        <br />
        지금 댓글을 달아보세요!
      </p>
    </div>
  );
}
