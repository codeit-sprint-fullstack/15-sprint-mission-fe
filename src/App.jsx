import { BrowserRouter, Routes, Route } from 'react-router';
import MarketPage from './components/pages/MarketPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
