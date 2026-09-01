import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ProductPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
