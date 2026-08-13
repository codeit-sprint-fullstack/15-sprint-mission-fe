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
      <h1 className={styles.title}>베스트 상품</h1>
      <ShowProductsList posts={posts} gridStyle={styles.girdStyle} imageSize={styles.imageSize} />
    </div>
  );
}