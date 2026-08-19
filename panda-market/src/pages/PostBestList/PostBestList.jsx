import './PostBestList.css';
import { PostBestCard } from '../PostBestCard';
import { useProduct } from '../../hook/useProduct';

const BEST_ITEMS_COUNT = 4;

export function PostBestList() {
  const { items } = useProduct({
    limit: BEST_ITEMS_COUNT,
    orderBy: 'favorite',
  });

  return (
    <div className="bestListcontainer">
      <div className="bestListheader">베스트 상품</div>
      <ul>
        {items.map((item) => (
          // <li key={item.id}>{item.name}</li>
          <PostBestCard items={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
