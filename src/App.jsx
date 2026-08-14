import { Route, Routes } from "react-router"
import "./App.css"
import Layout from "./components/Layout"
import Market from "./pages/market/Market"
import NotFound from "./pages/notFound/NotFound"
import ProductDetail from "./pages/productDetail/ProductDetail"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Market />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
