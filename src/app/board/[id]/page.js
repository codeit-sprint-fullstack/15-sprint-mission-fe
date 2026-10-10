import { getArticle } from "@/lib/api";
import { ArticleMenu } from "@/components/board/ArticleMenu";
import { CommentForm } from "@/components/board/CommentForm";
import Link from "next/link";

export default async function BoardDetail({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  return (
    <>
      <article>
        <h1>{article.title}</h1>
        <ArticleMenu articleId={article.id} />
        <p>{article.createdAt}</p>
        <p>{article.content}</p>
      </article>
      <CommentForm />
      <Link href="/board">목록으로 돌아가기</Link>
    </>
  );
}
