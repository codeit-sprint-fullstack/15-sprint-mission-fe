import { useState } from "react";

export const usePagination = (initalPage, itemsPerPage) => {
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(initalPage);
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // page 이동
  const goToPage = (pageNumber) => {
    if (pageNumber <= 0 || pageNumber > totalPages) {
      throw new Error("페이지 갯수가 맞지 않습니다.");
    }
    setCurrentPage(pageNumber);
  };

  return {
    totalCount,
    currentPage,
    totalPages,
    goToPage,
    setTotalCount,
  };
};
