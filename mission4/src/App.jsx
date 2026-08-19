import { useEffect, useState } from "react";
import { getProductList } from "./services/ProductService";
import ProductCard from "./components/ProductCard";
import "./App.css";
import BestProducts from "./components/BestProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductList(page, 10, keyword, orderBy);
      console.log("현재 페이지:", page);
      console.log("상품 목록:", data);

      if (data) {
        setProducts(data.list);
      }
    }

    fetchProducts();
  }, [page, keyword, orderBy]);

  function handleSearch(event) {
    event.preventDefault();

    const searchKeyword = event.target.keyword.value;

    setKeyword(searchKeyword);
  }

  function handleOrderChange(event) {
    setOrderBy(event.target.value);
  }

  return (
    <div>
      <h1>중고마켓</h1>

      <BestProducts />

      <section>
        <h2>전체 상품</h2>

        <form onSubmit={handleSearch}>
          <input type="text" name="keyword" placeholder="상품을 검색해보세요" />

          <button type="submit">검색</button>
        </form>

        <select value={orderBy} onChange={handleOrderChange}>
          <option value="">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>

        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div>
          <button onClick={() => setPage(1)}>1</button>
          <button onClick={() => setPage(2)}>2</button>
          <button onClick={() => setPage(3)}>3</button>
          <button onClick={() => setPage(4)}>4</button>
          <button onClick={() => setPage(5)}>5</button>
        </div>
      </section>
    </div>
  );
}

export default App;
