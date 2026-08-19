import { useEffect, useState } from "react";
import { getProductList } from "../services/ProductService";
import ProductCard from "./ProductCard";
import "./BestProducts.css";

function BestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchBestProducts() {
      const data = await getProductList(1, 4, "", "favorite");

      console.log("베스트 상품:", data);

      setProducts(data.list);
    }

    fetchBestProducts();
  }, []);

  return (
    <section>
      <h2>베스트 상품</h2>

      <div className="best-product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default BestProducts;
