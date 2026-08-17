import { useState } from 'react';

export function usePagination({initialPage =1, itemPerPage =10, totalCount = 0}){ 
  const [currentPage,setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalCount/itemPerPage);

  const goToPage = (selectedPage) => {
    if(selectedPage < 1 || selectedPage > totalPages){
      console.log(`페이지 선택을 잘못되어있습니다.`);
      return
    }
    
    setCurrentPage(selectedPage);
  }

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const startIndex  = (currentPage -1) * itemPerPage;
  const endIndex    = Math.min(startIndex + itemPerPage, totalCount);

  return{
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
  };
}