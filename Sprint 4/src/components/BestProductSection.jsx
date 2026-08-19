import useBestProducts from '../hooks/useBestProducts';
import ProductCard from './ProductCard';
import './BestProductSection.css';

const BEST_PAGE_SIZE = { mobile: 1, tablet: 2, desktop: 4 };

export default function BestProductSection({ deviceType }) {
  const pageSize = BEST_PAGE_SIZE[deviceType];
  const { products, isLoading, error } = useBestProducts(pageSize);

  return (
    <section className="best-section">
      <h2 className="best-section__title">베스트 상품</h2>

      {error && <p className="best-section__message">상품을 불러오지 못했어요.</p>}
      {!error && isLoading && <p className="best-section__message">불러오는 중...</p>}

      <div className={`best-section__grid best-section__grid--${deviceType}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
