import { BoardBestArticleCard } from "@/domains/board/components/BoardBestSection/BoardBestArticleCard";
import { heading } from "@/styles/shared.css";
import { bestGrid } from "@/domains/board/containers/BoardPageContainer/BoardPageContainer.css";

export function BoardBestSection({ articles, bestCount }) {
  const visible = bestCount ? articles.slice(0, bestCount) : articles;
  if (visible.length === 0) return null;

  return (
    <>
      <h2 className={heading}>베스트 게시글</h2>
      <div className={bestGrid}>
        {visible.map((article) => (
          <BoardBestArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
