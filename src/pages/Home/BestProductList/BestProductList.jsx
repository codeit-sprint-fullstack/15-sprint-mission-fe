import { Spinner } from '../../../component/Spinner/Spinner';
import { useProduct } from '../../../contexts/productContext';
import { BestProductItem } from '../bestProduct/bestProduct';
import styles from './BestProductList.module.css';

export function BestProductList() {
  const { bestProducts, isLoding, error } = useProduct();

  if (isLoding) {
    return <Spinner />;
  }
  if (error) {
    return <div>에러:{error}</div>;
  }

  return (
    <div className={styles.bestProductsDiv}>
      <p className={styles.bestProductsTitle}>베스트 상품</p>

      <ul className={styles.bestProductsUl}>
        {bestProducts.map((product) => (
          <BestProductItem
            key={product.id}
            image={product.images[0]}
            price={product.price}
            description={product.description}
            favoriteCount={product.favoriteCount}
          />
        ))}
      </ul>
    </div>
  );
}
