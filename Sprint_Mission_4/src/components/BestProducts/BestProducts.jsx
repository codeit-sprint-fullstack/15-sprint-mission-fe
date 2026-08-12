import { useState, useEffect } from 'react';
import { ShowProductsList } from '../ShowProductsList';
import { fetchPosts } from '../../api/posts'

export function BestProducts() {
  const [posts, setPosts] = useState([]);

  const currentPage = 1;
  const pageSize = 4
  const orderBy = 'favorite'

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { list } = await fetchPosts(
          currentPage,
          pageSize,
          orderBy,
        );
        setPosts(list);
      } catch (error) {
        console.log('[getPosts]Error: ', error);
      }
    };
    getPosts();
  }, [currentPage, pageSize, orderBy]);

  return (
    <div>
      <h1>베스트 상품</h1>
      <ShowProductsList posts={posts}/>
    </div>
  );
}
