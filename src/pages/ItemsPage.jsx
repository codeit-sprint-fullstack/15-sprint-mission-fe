import NavBar from "@/components/common/Navbar";
import ProductCardList from "@/components/items/ProductCardList";
import PaginationBar from "@/components/items/PaginationBar";
import Footer from "@/components/common/Footer";
import SearchBar from "@/components/items/SearchBar";
import RegisterButton from "@/components/items/RegisterButton";
import OrderDropdown from "@/components/items/OrderDropdown";
import LoadingSpinner from "@/components/common/LoadingSpinner";

import { useBestProducts, useProducts } from "@/hooks/useProducts";
import { useProductParams } from "@/hooks/useProductParams";
import { usePageSize } from "@/hooks/usePageSize";

export default function ItemsPage() {
  const { page, orderBy, keyword, handleSortChange, handleSearch } =
    useProductParams();
  const { bestProducts, isLoading: isBestLoading } = useBestProducts(4);
  const pageSize = usePageSize();

  const {
    products,
    totalPages,
    isLoading: isProductsLoading,
  } = useProducts({
    page,
    pageSize,
    orderBy,
    keyword,
  });

  return (
    <>
      <NavBar />

      <main className="max-w-[1200px] mx-auto py-8 px-4">
        <section className="py-4">
          <h2 className="font-bold text-[20px] text-[#111827] mb-4">
            베스트 상품
          </h2>
          {isBestLoading ? (
            <LoadingSpinner />
          ) : (
            <ProductCardList
              products={bestProducts}
              gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            />
          )}
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
          {isProductsLoading ? (
            <LoadingSpinner />
          ) : (
            <ProductCardList
              products={products}
              gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            />
          )}
        </section>
      </main>

      <PaginationBar currentPage={page} totalPages={totalPages || 1} />

      <Footer />
    </>
  );
}
