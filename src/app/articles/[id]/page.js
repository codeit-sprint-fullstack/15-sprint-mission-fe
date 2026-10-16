import * as styles from "./articleDetailPage.css";
import { getArticle } from "@/lib/api/articlesAPI";
import icProfile from "@/assets/images/ic-profile.svg";
import icHeart from "@/assets/images/ic-heart.svg";
import Image from "next/image";
import { formatDate } from "@/lib/utils/formatDate";
import CommentList from "@/components/articlesPage/List/CommentList/CommentList";
import icBack from "@/assets/images/ic-back.svg";
import Link from "next/link";
import { getComments } from "@/lib/api/commentsAPI";
import CommentForm from "./CommentForm";
import ArticleMenu from "@/components/articlesPage/ArticleMenu/ArticleMenu";

const author = "총명한판다";

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = await getArticle(id);
  const comments = await getComments(id);
  const formattedDate = formatDate(article.createdAt);

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.header}>
          <h1 className={styles.title}>{article.title}</h1>
          <ArticleMenu articleId={id} />
        </div>

        <div className={styles.infoBoxes}>
          <div className={styles.profileInfoBox}>
            <Image src={icProfile} alt="프로필 아이콘" width={24} height={24} />
            <span>{author}</span>
            <span>{formattedDate}</span>
          </div>
          <div className={styles.dividerLine}></div>
          <div className={styles.likesBox}>
            <Image src={icHeart} alt="하트" width={32} height={32} />
            <span>123</span>
          </div>
        </div>

        <hr className={styles.hr} />
        <p className={styles.content}>{article.content}</p>
      </article>

      <CommentForm articleId={id} />
      <CommentList comments={comments.list} />
      <Link href="/articles" className={styles.backButton}>
        목록으로 돌아가기
        <Image src={icBack} alt="" width={24} height={24} />
      </Link>
    </main>
  );
}
