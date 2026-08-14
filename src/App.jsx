import { Route, Routes } from "react-router"
import "./App.css"
import Layout from "./components/Layout"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Market from "./pages/market/Market"
import NotFound from "./pages/notFound/NotFound"
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
          <Route path="products/:productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
