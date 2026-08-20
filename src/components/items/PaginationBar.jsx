import leftButton from "@/assets/items/leftButton.svg";
import rightButton from "@/assets/items/rightButton.svg";
import { Link, useSearchParams } from "react-router-dom";

function PaginationBar({ currentPage, totalPages }) {
  const [searchParams] = useSearchParams();
  const PAGE_LIMIT = 5;

  const currentGroup = Math.ceil(currentPage / PAGE_LIMIT);
  const startPage = (currentGroup - 1) * PAGE_LIMIT + 1;
  const endPage = Math.min(startPage + PAGE_LIMIT - 1, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const getPageUrl = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page);
    return `?${newParams.toString()}`;
  };

  const isFirstGroup = startPage <= 1;
  const isLastGroup = endPage >= totalPages;

  if (totalPages <= 0) return null;

  return (
    <nav className="flex items-center justify-center gap-2 mt-2 mb-[100px]">
      {isFirstGroup ? (
        <img
          src={leftButton}
          alt="이전 페이지 버튼"
          className="opacity-30 cursor-not-allowed"
        />
      ) : (
        <Link to={getPageUrl(startPage - 1)}>
          <img src={leftButton} alt="이전 페이지 버튼" />
        </Link>
      )}

      {pageNumbers.map((page) => {
        const isCurrent = page === currentPage;

        return (
          <Link key={page} to={getPageUrl(page)}>
            {isCurrent ? (
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2F80ED] text-white font-bold text-sm">
                {page}
              </span>
            ) : (
              <span className="w-10 h-10 flex items-center justify-center rounded-full text-[#4B5563] border border-[#E5E7EB] hover:bg-gray-100 font-medium text-sm transition-colors">
                {page}
              </span>
            )}
          </Link>
        );
      })}

      {isLastGroup ? (
        <img
          src={rightButton}
          alt="다음 페이지 버튼"
          className="opacity-30 cursor-not-allowed"
        />
      ) : (
        <Link to={getPageUrl(endPage + 1)}>
          <img src={rightButton} alt="다음 페이지 버튼" />
        </Link>
      )}
    </nav>
  );
}

export default PaginationBar;
