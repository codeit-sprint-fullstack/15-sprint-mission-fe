import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductCard from "./ProductCard";
import useWindowWidth from "../hooks/useWindowWidth";

function BestProductsSection() {
  const [products, setProducts] = useState([]);
  const windowWidth = useWindowWidth();

  let pageSize = 4;
  
  if (windowWidth < 744) {
    pageSize = 1;
  } else if (windowWidth < 1280) {
    pageSize = 2;
  }

  useEffect(() => {
    async function loadBestProducts() {
      const data = await getProducts({
        page: 1,
        pageSize,
        orderBy: "favorite",
      });

      setProducts(data.list);
    }

    loadBestProducts();
  }, [pageSize]);

  return (
    <section
      className="bestProducts"
      aria-labelledby="best-products-title"
    >
      <h2 id="best-products-title" className="sectionTitle">
        베스트 상품
      </h2>

      <div className="bestProductsGrid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default BestProductsSection;