import LoadingSpinner from "@/components/common/LoadingSpinner";
import ErrorMessage from "@/components/common/ErrorMessage";
import ProductCardList from "@/components/itemsPageComponents/ProductCardList";

function BestProductsSection({ isLoading, error, products }) {
  return (
    <section className="py-4">
      <h2 className="font-bold text-[20px] text-[#111827] mb-4">베스트 상품</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <ProductCardList
          products={products}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        />
      )}
    </section>
  );
}

export default BestProductsSection;
