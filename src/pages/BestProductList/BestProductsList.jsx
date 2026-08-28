import { useDevice } from "../../hooks/useDevice";
import { useProducts } from "../../hooks/useProducts";
import { BestProductCard } from "../BestProductCard/BestProductCard";
import styles from "./BestProductList.module.css";

export function BestProductsList() {
  const { isTablet, isMobile } = useDevice();
  const pageSize = isMobile ? 1 : isTablet ? 2 : 4;
  const { products } = useProducts({ standard: "favorite", pageSize });

  return (
    <div className={styles.bestProductListContainer}>
      <h2 className={styles.bestProductTitle}>배스트 상품</h2>
      <ul>
        {products.map((product) => (
          <BestProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
