import { BoardArticleListItem } from "@/domains/board/components/BoardArticleList/BoardArticleListItem";
import { empty } from "@/domains/board/containers/BoardPageContainer/BoardPageContainer.css";

export function BoardArticleList({ articles, emptyMessage }) {
  if (articles.length === 0) {
    return <p className={empty}>{emptyMessage}</p>;
  }

  return (
    <div>
      {articles.map((article) => (
        <BoardArticleListItem key={article.id} article={article} />
      ))}
    </div>
  );
}
