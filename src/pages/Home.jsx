import { BestProducts } from '../components/BestProducts';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { SaleProducts } from '../components/SaleProducts';

export function Home() {
  return (
    <div>
      <h1>내가 홈이다</h1>
      <Navigation />
      <BestProducts />
      <SaleProducts />
      <Footer />
    </div>
  );
}
