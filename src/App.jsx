import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
// import { BestProductsList } from "./pages/BestProductList/BestProductsList";
import { ProductList } from "./pages/productList/ProductList";
import { ProductRegistration } from "./pages/ProductRegistration/ProductRegistration";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  // product 값 저장
  const { pathname } = useLocation();

  return (
    <div>
      <Header />
      <div
        className={
          pathname === "/" ? "landingMainContainer" : "mainContainer"
        }
      >
        <Routes>
          {/* 차후에 경로 변경해야함 */}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/items" element={<ProductList />}></Route>
          <Route path="/registration" element={<ProductRegistration />}></Route>
        </Routes>
        {/* <div>
          <BestProductsList />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
