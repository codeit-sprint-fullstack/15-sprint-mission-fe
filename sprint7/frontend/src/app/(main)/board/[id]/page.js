import { notFound } from "next/navigation";
import { ArticleDetailContainer } from "@/domains/article/containers/ArticleDetailContainer";
import { fetchArticleDetail, fetchCommentList } from "@/apis";
import { parseArticleId } from "@/utils";

export const dynamic = "force-dynamic";

export default async function BoardDetailPage({ params }) {
  const { id } = await params;
  const articleId = parseArticleId(id);

  if (articleId === null) {
    notFound();
  }

  const article = await fetchArticleDetail(articleId).catch((error) => {
    if (error?.status === 404) return null;
    throw error;
  });

  if (!article) {
    notFound();
  }

  const commentResponse = await fetchCommentList({
    articleId,
    limit: 10,
  });

  return (
    <ArticleDetailContainer
      article={article}
      initialComments={commentResponse.list}
    />
  );
}
