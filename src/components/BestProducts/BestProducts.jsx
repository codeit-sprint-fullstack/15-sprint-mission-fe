import { ShowProductsList } from '../ShowProductsList';
import { usePost } from '../../hooks/usePost';
import styles from './BestProducts.module.css';
import { useWindowSize } from '../../hooks/useWindowSize';

export function BestProducts() {
  const windowWidth = useWindowSize();

  const pageSize = windowWidth <= 480 ? 1 : windowWidth <= 768 ? 2 : 4;

  const { posts } = usePost(pageSize, 'favorite');

  return (
    <div className={styles.body}>
      <label className={styles.title}>
        베스트 상품
        <ShowProductsList
          posts={posts}
          gridStyle={styles.girdStyle}
          imageSize={styles.imageSize}
        />
      </label>
    </div>
  );
}
