import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/posts';

const INITIAL_TOTAL_COUNT = 0;
const INITIAL_PAGE = 1;

export function ShowProductsList({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = undefined,
}) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

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
      } catch (error) {
        console.log('[getPosts]Error: ', error);
        setError(error.message);
      }
    };
    getPosts();
  }, [currentPage, pageSize, orderBy, keyword]);

  return (
    <div>
      <h1>ShowProductsList</h1>
      <ul>
        {posts.map(({ id, name, price, favoriteCount}) => (
          <li key={id}>제목:{name} / 가격:{price} / 좋아요:{favoriteCount}</li>
        ))}
      </ul>
    </div>
  );
}
