import Image from "next/image";
import * as styles from "./CommentList.css";
import dotMenu from "@/assets/ic_kebab.svg";
import profileImg from "@/assets/ic_profile.svg";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";

export default function CommentList({ comments }) {
  console.log("데이터형태", comments);
  return (
    <section className={styles.container}>
      <ul className={styles.listWrapper}>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id} className={styles.commentItem}>
              <div className={styles.header}>
                <div className={styles.content}>{comment.content}</div>
                <Image src={dotMenu} alt="dotMenu" className={styles.dotMenu} />
              </div>
              <div className={styles.info}>
                <Image
                  src={profileImg}
                  alt="profileImg"
                  width={32}
                  height={32}
                />
                <div className={styles.detail}>
                  <div className={styles.userName}>{comment.writer.name}</div>
                  <div className={styles.date}>
                    {formatDistanceToNow(new Date(comment.createdAt), {
                      addSuffix: true,
                      locale: ko,
                    })}
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <Link href={"/articles"} className={styles.returnBtn}>
        목록으로 돌아가기
      </Link>
    </section>
  );
}
