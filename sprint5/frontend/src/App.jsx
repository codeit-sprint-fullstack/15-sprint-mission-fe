import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ItemsPage from './pages/ItemsPage';
import RegistrationPage from './pages/RegistrationPage';
import DetailPage from './pages/DetailPage';
import useDeviceType from './hooks/useDeviceType';
import './App.css';


export default function App() {
  const deviceType = useDeviceType();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/items" element={<ItemsPage deviceType={deviceType} />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/items/:productId" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
