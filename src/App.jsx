import { BestProducts } from './components/BestProducts';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { SaleProducts } from './components/SaleProducts';

function App() {
  return (
    <div>
      <h1>판다마켓</h1>
      <Navigation />

      <BestProducts />

      <SaleProducts />

      <Footer />
    </div>
  );
}

export default App;
