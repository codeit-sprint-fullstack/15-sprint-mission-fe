import "@/styles/reset.css";
import "./index.css";
import { SaleForProductList } from "./pages/Home/SaleForProductList/SaleForProductLsit";
import { MarketHeader } from "./component/Header/MarketHeader";
import { MarketFooter } from "./component/Footer/MarketFooter";
import { BestProductList } from "./pages/Home/bestProductList/bestProductList";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <MarketHeader />
      <main>
        <div className={styles.listDiv}>
          <BestProductList />
          <SaleForProductList />
        </div>
      </main>
      <MarketFooter />
    </>
  );
}

export default App;
