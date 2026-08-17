import NavBar from "./NavBar";
import ProductCardList from "./ProductCardList";
import { bestProducts, allProducts } from "./DummyProduct";
import { useSearchParams } from "react-router-dom";
import PaginationBar from "./PaginationBar";

function App() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <>
      <NavBar />

      <main>
        <section>
          <h2 className="font-bold text-[20px] ">베스트 상품</h2>
          <ProductCardList
            products={bestProducts}
            gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          />
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">판매 중인 상품</h2>
          <ProductCardList
            products={allProducts}
            gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          />
        </section>
      </main>

      <PaginationBar currentPage={currentPage} totalPages={5}/>
    </>
  );
}

export default App;
