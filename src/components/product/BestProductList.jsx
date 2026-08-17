//# 베스트 상품 섹션 (그리드 + 데이터 fetch)
import ProductCard from './ProductCard.jsx';
import styles from './BestProductList.module.css';
import { useProducts } from '../hooks/useProducts';
import LoadingSpinner from '../common/LoadingSpinner.jsx';
import ErrorMessage from '../common/ErrorMessage.jsx';
import EmptyState from '../common/EmptyState.jsx';

export default function BestProductList() {
  const { products, isLoading, error } = useProducts({
    pageSize: 4,
    orderBy: 'favorite',
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 상품</h2>
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <ErrorMessage message={error.message} />}
      {!isLoading && !error && products.length === 0 && <EmptyState />}

      {!isLoading && !error && products.length > 0 && (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
}
