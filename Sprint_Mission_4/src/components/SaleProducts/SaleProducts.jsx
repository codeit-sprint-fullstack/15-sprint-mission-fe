import { useState, useEffect } from 'react';
import { Pagination } from '../Pagination';
import { SearchProducts } from '../SearchProducts';
import { ShowProductsList } from '../ShowProductsList';
import { SortProducts } from '../SortProducts';
import { fetchPosts } from '../../api/posts'

const INITIAL_TOTAL_COUNT = 0;
const INITIAL_PAGE = 1;

export function SaleProducts() {
  const [posts, setPosts] = useState([]);

  const [pageSize, setPageSize] = useState();
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');

  const [totalCount, setTotalCount] = useState(INITIAL_TOTAL_COUNT);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const totalPages = Math.ceil(totalCount / pageSize);
  

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { list, totalCount } = await fetchPosts(
          currentPage,
          pageSize,
          orderBy,
          keyword,
        );
        setPosts(list);
        setTotalCount(totalCount);
        setPageSize(10)
      } catch (error) {
        console.log('[getPosts]Error: ', error);
      }
    };
    getPosts();
  }, [currentPage, pageSize, orderBy, keyword]);

  console.log('데이터: ', posts);
  console.log('tc:',totalCount,'tp:',totalPages,'ps:',pageSize);

  const handleSort = (sortValue) => {
    setOrderBy(sortValue);
  };
  const handleSearch = (searchValue) => {
    setKeyword(searchValue);
  };
  console.log('전달받은 sort:', orderBy);
  console.log('전달받은 search:', keyword);
  const goToPage = (selectedPage) => {
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
        onPageChange={goToPage}
      />
    </div>
  );
}
