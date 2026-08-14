import { Route, Routes } from "react-router"
import "./App.css"
import Layout from "./components/Layout"
import Faq from "./pages/faq/Faq"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Market from "./pages/market/Market"
import NotFound from "./pages/notFound/NotFound"
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy"
import ProductDetail from "./pages/productDetail/ProductDetail"
import ProductRegister from "./pages/productRegister/ProductRegister"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Market />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="product-register" element={<ProductRegister />} />
          <Route path="faq" element={<Faq />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="products/:productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
