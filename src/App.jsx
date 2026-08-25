import { BrowserRouter, Routes, Route } from 'react-router';
import { LandingPage } from './components/landing-page/LandingPage';
import { ItemsPage } from './components/items-page/ItemsPage';
import { RegisterPage } from './components/register-page/RegisterPage';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
