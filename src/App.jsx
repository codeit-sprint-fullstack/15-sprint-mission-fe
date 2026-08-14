import { Route, Routes } from "react-router"
import "./App.css"
import GlobalFooter from "./components/GlobalFooter"
import GlobalHeader from "./components/GobalHeader"
import Market from "./pages/market/Market"
import NotFound from "./pages/notFound/NotFound"
import ProductDetail from "./pages/productDetail/ProductDetail"

function App() {
  return (
    <>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalFooter />
    </>
  )
}

export default App
