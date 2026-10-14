import Image from "next/image";
import sample from "@/assets/images/sample_image.svg";
import provileImg from "@/assets/icons/ic_profile.svg";
import styles from "./ArticleCardList.module.css";
import likeIcon from "@/assets/likeIcon.svg";
import { formatDate } from "@/utils/formatTime";
import Link from "next/link";
import { articleApi } from "@/components/api/articleApi";

export default async function ArticleCardList({ keyword, sort }) {
  let list;
  try {
    const { data } = await articleApi.getList({
      keyword: keyword || undefined,
      sort,
    });
    list = data?.list ?? [];
  } catch (error) {
    console.error("게시글 불러오기 실패", error);
    return (
      <div className={styles.stateMessage} role="alert">
        게시글을 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
      </div>
    );
  }

  if (list.length === 0) {
    return <div className={styles.empty}>아직 게시글이 없어요</div>;
  }

  return (
    <ul className={styles.articleList}>
      {list.map((value) => (
        <li key={value.id}>
          <Link href={`/community/${value.id}`} className={styles.articleCard}>
            <div className={styles.title}>{value.title}</div>
            <Image
              src={sample}
              alt={`${value.title} 게시 사진`}
              width={48}
              height={44}
              className={styles.image}
            />

            <div className={styles.user}>
              <Image
                src={provileImg}
                alt=""
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
