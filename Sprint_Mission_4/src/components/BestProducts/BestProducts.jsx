import { ShowProductsList } from '../ShowProductsList';
import { usePost } from '../../hooks/usePost';

export function BestProducts() {
  const { posts } = usePost(1, 4, 'favorite');

  return (
    <div>
      <h1>베스트 상품</h1>
      <ShowProductsList posts={posts} />
    </div>
  );
}
