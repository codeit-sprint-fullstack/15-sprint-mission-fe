import { getArticle } from "../../../../api/articles";
import EditArticleForm from "../../../../components/ArticleForm/EditArticleForm";

export default async function EditArticlePage({ params }) {
  const { id } = await params;
  const { data: article } = await getArticle(id);

  return <EditArticleForm article={article} />;
}
