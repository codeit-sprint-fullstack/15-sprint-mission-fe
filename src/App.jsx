// import './App.css';
// import { useMediaQuery } from './hooks/useMediaQuery';
import Nav from './components/Nav';
import BestItems from './components/BestItems';
import AllItems from './components/AllItems';
import Footer from './components/Footer';

function App() {
  // const mediaQuery = useMediaQuery();
  return (
    <>
      <Nav />
      <BestItems />
      <AllItems />
      <Footer />
    </>
  );
}

export default App;
