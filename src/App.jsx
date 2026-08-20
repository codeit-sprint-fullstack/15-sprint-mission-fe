import ItemsPage from "@/pages/ItemsPage";
import LandingPage from "@/pages/LandingPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/items" element={<ItemsPage />} /> {/* 👈 경로 연결 확인 */}
    </Routes>
  );
}

export default App;
