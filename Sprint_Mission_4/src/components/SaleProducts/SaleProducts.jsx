import { useState } from 'react';
import { Pagination } from '../Pagination';
import { SearchProducts } from '../SearchProducts';
import { ShowProductsList } from '../ShowProductsList';
import { SortProducts } from '../SortProducts';

export function SaleProducts() {
  const [sort, setSort] = useState('recent');
  const [search, setSearch] = useState('');

  const handleSort = (sortValue) => {
    setSort(sortValue);
  };
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };
  console.log('전달받은 sort:', sort);
  console.log('전달받은 search:', search);

  return (
    <div>
      <h1>판매중인 상품</h1>
      <SearchProducts search={handleSearch} />
      <button>상품등록</button>
      <SortProducts sort={handleSort} />
      <ShowProductsList
        page={1}
        pageSize={10}
        orderBy={sort}
        keyword={search}
      />
      <Pagination currentPage={1} totalPages={5} />
    </div>
  );
}
