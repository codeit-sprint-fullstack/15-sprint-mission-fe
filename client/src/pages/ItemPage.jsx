import { useState } from 'react';
import { ItemHead } from '../components/ItemHead/ItemHead';
import { Pagination } from '../components/Pagination/Pagination';
import { ShowProductsList } from '../components/ShowProductsList/ShowProductsList';
import { usePost } from '../hooks/usePost';

export function ItemPage() {
  const [sort, setSort] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(5);
  const { posts, totalPages, currentPage, handleCurrentPage } = usePost(
    limit,
    sort,
    keyword,
  );
  const handleSearch = (searchValue) => {
    setKeyword(searchValue);
  };
   const handleSort = (sortValue) => {
    setSort(sortValue);
  };

  return (
    <>
      <h1>중고마켓 페이지입니다.</h1>
      <ItemHead search={handleSearch} sort={handleSort}/>
      <ShowProductsList posts={posts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleCurrentPage}
      />
    </>
  );
}
