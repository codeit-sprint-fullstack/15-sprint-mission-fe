import ItemsPage from "@/pages/ItemsPage";
import LandingPage from "@/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
