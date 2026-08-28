import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BestProductsList } from "./pages/BestProductList/BestProductsList";
import { ProductList } from "./pages/productList/ProductList";

function App() {
  // product 값 저장

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <div>
          <BestProductsList />
        </div>

        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
