import { ArticleForm } from "@/components/board/ArticleForm";
import { getArticle } from "@/lib/api";

export default async function EditArticle({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  return (
    <ArticleForm
      articleId={article.id}
      initialTitle={article.title}
      initialContent={article.content}
    />
  );
}
