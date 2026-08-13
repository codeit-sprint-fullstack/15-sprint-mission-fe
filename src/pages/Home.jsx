import { BestProducts } from '../components/BestProducts';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { SaleProducts } from '../components/SaleProducts';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.homeBody}>
      <Navigation />
      <BestProducts />
      <SaleProducts />
      <Footer />
    </div>
  );
}
