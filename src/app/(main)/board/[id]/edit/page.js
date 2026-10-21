import { notFound } from "next/navigation";
import { ArticleEditorContainer } from "@/domains/article/containers/ArticleEditorContainer";
import { fetchArticleDetail } from "@/apis";
import { parseArticleId } from "@/utils";

export default async function EditArticlePage({ params }) {
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

  return <ArticleEditorContainer article={article} />;
}
