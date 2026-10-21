"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pagination } from "@/components/Pagination";
import { SearchBar } from "@/components/SearchBar";
import { ARTICLE_OPTIONS, SortDropdown } from "@/components/SortDropdown";
import { BoardArticleList } from "@/domains/board/components/BoardArticleList";
import { BoardBestSection } from "@/domains/board/components/BoardBestSection";
import { buildBoardHref } from "@/domains/board/utils/boardQuery";
import { useDeviceType } from "@/hooks/useDeviceType";
import { board, btn, head, heading } from "@/styles/shared.css";
import { toolbar } from "./BoardPageContainer.css";

const BEST_COUNT = { desktop: 3, tablet: 2, mobile: 1 };

export function BoardPageContainer({
  articles,
  bestArticles,
  totalCount,
  page,
  pageSize,
  orderBy,
  keyword,
}) {
  const router = useRouter();
  const deviceType = useDeviceType();
  const filters = { page, pageSize, orderBy, keyword };

  const applyFilters = (next) => {
    router.push(buildBoardHref({ ...filters, ...next, page: 1 }));
  };

  return (
    <section className={board}>
      <BoardBestSection
        articles={bestArticles}
        bestCount={BEST_COUNT[deviceType]}
      />

      <div className={head}>
        <h2 className={heading}>게시글</h2>
        <Link href="/addArticle" className={btn}>
          글쓰기
        </Link>
      </div>

      <div className={toolbar}>
        <SearchBar
          fluid
          initialValue={keyword}
          onSearch={(value) => applyFilters({ keyword: value })}
        />
        <SortDropdown
          options={ARTICLE_OPTIONS}
          orderBy={orderBy}
          onChange={(value) => applyFilters({ orderBy: value })}
        />
      </div>

      <BoardArticleList
        articles={articles}
        emptyMessage={keyword ? "검색 결과가 없어요." : "아직 게시글이 없어요."}
      />

      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        orderBy={orderBy}
        keyword={keyword}
        buildHref={buildBoardHref}
      />
    </section>
  );
}
