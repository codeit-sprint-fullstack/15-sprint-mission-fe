import * as styles from "@/styles/article.css.js";
import { notFound } from "next/navigation";
import { CommentSection } from "@/components/CommentSection";
import { ArticleDetail } from "@/components/ArticleDetail";

export default async function articlePage({ params }) {
  const { id } = await params;

  const response = await fetch(`${process.env.API_URL}/api/articles/${id}`);
  const resComment = await fetch(
    `${process.env.API_URL}/api/articles/${id}/comments`,
  );

  if (response.status === 404) {
    notFound(); //-> next/navigation에서 제공하는 기능
    //직접 만든 not-found.js 를 찾아준다.
  }
  if (!response.ok) {
    return <div>게시글 정보를 불러올 수 없습니다.</div>;
  }

  const article = await response.json();
  const commentPromise = resComment.json();
  console.log("게시글 내용, ", article);

  return (
    <section className={styles.articleWrapper}>
      <ArticleDetail article={article} />
      <CommentSection articleId={id} commentPromise={commentPromise} />
    </section>
  );
}
