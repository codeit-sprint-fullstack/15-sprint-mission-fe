import NavBar from "./NavBar";
import ProductCardList from "./ProductCardList";
import { useSearchParams } from "react-router-dom";
import PaginationBar from "./PaginationBar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import RegisterButton from "./RegisterButton";
import OrderDropdown from "./OrderDropdown";
import { useBestProducts, useProducts } from "../hooks/useProducts";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const orderBy = searchParams.get("orderBy") || "recent";
  const keyword = searchParams.get("keyword") || "";

  const { bestProducts, isLoading: isBestLoading } = useBestProducts(4);
  const {
    products,
    totalCount,
    isLoading: isProductsLoading,
  } = useProducts({
    page,
    orderBy,
    keyword,
  });

  const pageSize = 10;
  const totalPages = Math.ceil(totalCount / pageSize);

  const handleSortChange = (newSort) => {
    setSearchParams((prev) => {
      prev.set("orderBy", newSort);
      prev.set("page", "1");
      return prev;
    });
  };

  const handleSearch = (newKeyword) => {
    setSearchParams((prev) => {
      if (newKeyword) {
        prev.set("keyword", newKeyword);
      } else {
        prev.delete("keyword");
      }
      prev.set("page", "1");
      return prev;
    });
  };

  return (
    <>
      <NavBar />

      <main className="max-w-[1200px] mx-auto py-8">
        <section className="py-4">
          <h2 className="font-bold text-[20px] text-[#111827] mb-4">
            베스트 상품
          </h2>
          <ProductCardList
            products={bestProducts}
            gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          />
        </section>

        <section>
          <div className="flex justify-between mt-4 mb-4">
            <h2 className="font-bold text-[20px] text-[#111827] ">
              판매 중인 상품
            </h2>
            <div className="flex items-center gap-3">
              <SearchBar initialKeyword={keyword} onSearch={handleSearch} />
              <RegisterButton onClick={() => alert("상품 등록 기능 준비 중")} />
              <OrderDropdown value={orderBy} onChange={handleSortChange} />
            </div>
          </div>
          <ProductCardList
            products={products}
            gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          />
        </section>

      </main>

      <PaginationBar currentPage={page} totalPages={totalPages || 1} />
      
      <Footer />
    </>
  );
}

export default App;
