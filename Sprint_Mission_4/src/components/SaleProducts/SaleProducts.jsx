import { useState } from 'react';
import { Pagination } from '../Pagination';
import { SearchProducts } from '../SearchProducts';
import { ShowProductsList } from '../ShowProductsList';
import { SortProducts } from '../SortProducts';
import { usePost } from '../../hooks/usePost';

const INITIAL_PAGE = 1;

export function SaleProducts() {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const { posts, totalPages } = usePost(currentPage, 10, orderBy, keyword);

  const handleSort = (sortValue) => {
    setOrderBy(sortValue);
  };
  const handleSearch = (searchValue) => {
    setKeyword(searchValue);
  };
  const handleCurrentPage = (selectedPage) => {
    if (selectedPage < 1 || selectedPage > totalPages) {
      console.log('페이지 선택이 잘못되었습니다.');
      return;
    }
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <h1>판매중인 상품</h1>
      <SearchProducts search={handleSearch} />
      <button>상품등록</button>
      <SortProducts sort={handleSort} />
      <ShowProductsList posts={posts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleCurrentPage}
      />
    </div>
  );
}
