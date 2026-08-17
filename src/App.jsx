// import './App.css';
// import { useMediaQuery } from './hooks/useMediaQuery';
import Nav from './components/Nav';
import BestItems from './components/BestItems';
import ForSaleItems from './components/ForSaleItems';
import Footer from './components/Footer';

function App() {
  // const mediaQuery = useMediaQuery();
  return (
    <>
    <Nav />
    <BestItems/>
    <ForSaleItems/>
    <Footer />
    </>
  );
}

export default App;
