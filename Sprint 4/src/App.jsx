import Navbar from './components/NavBar';
import Footer from './components/Footer';
import BestProductSection from './components/BestProductSection';
import ProductListSection from './components/ProductListSection';
import useDeviceType from './hooks/useDeviceType';
import './App.css';


export default function App() {
  const deviceType = useDeviceType();

  return (
    <div className="app">
      <Navbar />
      <main>
        <BestProductSection deviceType={deviceType} />
        <ProductListSection deviceType={deviceType} />
      </main>
      <Footer />
    </div>
  );
}
