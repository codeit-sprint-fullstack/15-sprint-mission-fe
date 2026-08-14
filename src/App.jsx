import { Route, Routes } from "react-router"
import "./App.css"
import GlobalFooter from "./components/GlobalFooter"
import GlobalHeader from "./components/GobalHeader"
import Market from "./pages/market/Market"

function App() {
  return (
    <>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Market />} />
      </Routes>
      <GlobalFooter />
    </>
  )
}

export default App
