import { useState } from 'react';
import { Pagination } from '../Pagination';
import { SearchProducts } from '../SearchProducts';
import { ShowProductsList } from '../ShowProductsList';
import { SortProducts } from '../SortProducts';
import { usePost } from '../../hooks/usePost';



export function SaleProducts() {

  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const { posts, totalPages, currentPage, handleCurrentPage } = usePost(10, orderBy, keyword);

  const handleSort = (sortValue) => {
    setOrderBy(sortValue);
  };
  const handleSearch = (searchValue) => {
    setKeyword(searchValue);
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
