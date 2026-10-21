import { BoardPageContainer } from "@/domains/board/containers/BoardPageContainer";
import { parseBoardSearchParams } from "@/domains/board/utils/boardQuery";
import { fetchArticleList } from "@/apis";

export const metadata = {
  title: "자유게시판 | 판다마켓",
  description: "판다마켓 자유게시판입니다.",
};

const BEST_FETCH_SIZE = 3;

export default async function BoardPage({ searchParams }) {
  const filters = parseBoardSearchParams(await searchParams);

  const [articleResponse, bestResponse] = await Promise.all([
    fetchArticleList({
      page: filters.page,
      pageSize: filters.pageSize,
      orderBy: filters.orderBy,
      keyword: filters.keyword,
    }),
    fetchArticleList({ page: 1, pageSize: BEST_FETCH_SIZE, orderBy: "like" }),
  ]);

  return (
    <BoardPageContainer
      articles={articleResponse.list}
      bestArticles={bestResponse.list}
      totalCount={articleResponse.totalCount}
      page={filters.page}
      pageSize={filters.pageSize}
      orderBy={filters.orderBy}
      keyword={filters.keyword}
    />
  );
}
