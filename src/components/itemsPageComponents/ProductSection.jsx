import SearchBar from "@/components/itemsPageComponents/SearchBar";
import RegisterButton from "@/components/itemsPageComponents/RegisterButton";
import OrderDropdown from "@/components/itemsPageComponents/OrderDropdown";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ErrorMessage from "@/components/common/ErrorMessage";
import ProductCardList from "@/components/itemsPageComponents/ProductCardList";

function ProductSection({
  keyword,
  handleSearch,
  orderBy,
  handleSortChange,
  isLoading,
  error,
  products,
}) {
  return (
    <section>
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-[20px] text-[#111827]">판매 중인 상품</h2>
        <div className="flex items-center gap-3">
          <SearchBar initialKeyword={keyword} onSearch={handleSearch} />
          <RegisterButton onClick={() => alert("상품 등록 기능 준비 중")} />
          <OrderDropdown value={orderBy} onChange={handleSortChange} />
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <ProductCardList
          products={products}
          gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        />
      )}
    </section>
  );
}

export default ProductSection;
