import Image from "next/image";
import styles from "./BestArticleList.module.css";
import bestBadge from "@/assets/best_badge.svg";
import { formatDate } from "@/utils/formatTime";
import likeIcon from "@/assets/likeIcon.svg";
import sample from "@/assets/images/sample_image.svg";
import Link from "next/link";
import { articleApi } from "@/components/api/articleApi";

export default async function BestArticleList() {
  let list;

  try {
    const { data } = await articleApi.getList({
      sort: "desc",
      page: 1,
      limit: 3,
    });
    list = data ?? [];
  } catch (error) {
    console.error("베스트 게시글 불러오기 실패", error);
    return (
      <div className={styles.stateMessage} role="alert">
        게시글을 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
      </div>
    );
  }

  if (list.length === 0) {
    return <div className={styles.stateMessage}>아직 게시글이 없어요</div>;
  }

  return (
    <ul className={styles.bestList}>
      {list.map((value) => (
        <li key={value.id}>
          <Link href={`/community/${value.id}`} className={styles.bestCard}>
            <Image
              src={bestBadge}
              alt="베스트 뱃지"
              width={102}
              className={styles.bestBadge}
            />
            <div className={styles.title}>{value.title}</div>
            <Image
              src={sample}
              alt={`${value.title} 게시 사진`}
              width={72}
              height={72}
              className={styles.image}
            />
            <div className={styles.user}>
              <span className={styles.username}>총명한 판다</span>
              <span className={styles.likeIcon}>
                <Image
                  src={likeIcon}
                  alt=""
                  aria-hidden
                  width={16}
                  height={16}
                />
              </span>
              <span className={styles.likecount}>9999+</span>
            </div>

            <div className={styles.createdAt}>
              {formatDate(value.createdAt)}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
