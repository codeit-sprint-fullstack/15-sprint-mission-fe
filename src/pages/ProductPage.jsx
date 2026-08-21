import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";
import "../styles/ProductPage.css";
import useProducts from "../hooks/useProducts";

function ProductPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");

  const { products, totalCount } = useProducts(page, searchKeyword, orderBy);

  const handleSearch = () => {
    setPage(1);
    setSearchKeyword(keyword);
  };
  return (
    <main className="product-page">
      {/* 판매중인 상품 영역 */}
      <section className="all-section">
        {/* 판매중인 상품 제목과 버튼묶음 */}
        <div className="section-actions">
          <h2 className="main-font">판매중인 상품</h2>
          {/* 검색, 상품 등록, 정렬 묶음 */}
          <div className="product-action">
            <SearchBar
              keyword={keyword}
              setKeyword={setKeyword}
              onSearch={handleSearch}
            />
            <button
              className="pd-btn"
              onClick={() => navigate("/registration")}
            >
              상품 등록하기
            </button>
            <SortDropdown orderBy={orderBy} setOrderBy={setOrderBy} />
          </div>
        </div>

        <div className="all-product-list">
          {/*전체 상품*/}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination page={page} setPage={setPage} totalCount={totalCount} />
      </section>
    </main>
  );
}

export default ProductPage;
