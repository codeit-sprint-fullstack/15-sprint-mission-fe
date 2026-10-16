import { getArticle } from "@/lib/api/articlesAPI";
import ArticleForm from "@/components/articlesPage/ArticleForm/ArticleForm";

export default async function EditArticlePage({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  return <ArticleForm article={article} />;
}
