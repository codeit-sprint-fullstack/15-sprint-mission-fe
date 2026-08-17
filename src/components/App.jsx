import NavBar from "./NavBar";
import ProductCardList from "./ProductCardList";
import { bestProducts, allProducts } from "./DummyProduct";
import { useSearchParams } from "react-router-dom";
import PaginationBar from "./PaginationBar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import RegisterButton from "./RegisterButton";

function App() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

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
          <h2 className="font-bold text-[20px] text-[#111827] mb-4">
            판매 중인 상품
          </h2>
          <SearchBar/>
          <RegisterButton/>
          <ProductCardList
            products={allProducts}
            gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          />
        </section>
      </main>

      <PaginationBar currentPage={currentPage} totalPages={5} />
      <Footer />
    </>
  );
}

export default App;
