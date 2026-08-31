import NavBar from "@/components/common/Navbar";
import PaginationBar from "@/components/itemsPageComponents/PaginationBar";
import Footer from "@/components/common/Footer";
import ProductSection from "@/components/itemsPageComponents/ProductSection";

import { useProducts } from "@/hooks/useProducts";
import { useProductParams } from "@/hooks/useProductParams";
import { usePageSize } from "@/hooks/usePageSize";

export default function ItemsPage() {
  const { page, orderBy, keyword, handleSortChange, handleSearch } =
    useProductParams();

  const pageSize = usePageSize();

  const {
    products,
    totalPages,
    isLoading: isProductsLoading,
    error: productsError,
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

        <ProductSection
        keyword={keyword}
        handleSearch={handleSearch}
        orderBy={orderBy}
        handleSortChange={handleSortChange}
        isLoading={isProductsLoading}
        error={productsError}
        products={products}
      />

      </main>

      <PaginationBar currentPage={page} totalPages={totalPages || 1} />

      <Footer />
    </>
  );
}
