import { Route, Routes } from "react-router"
import "./App.css"
import GlobalFooter from "./components/GlobalFooter"
import GlobalHeader from "./components/GobalHeader"
import Market from "./pages/market/Market"
import ProductDetail from "./pages/productDetail/ProductDetail"

function App() {
  return (
    <>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
      <GlobalFooter />
    </>
  )
}

export default App
