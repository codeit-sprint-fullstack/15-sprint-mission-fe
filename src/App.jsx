import { LandingPage, ItemPage, LoginPage, FreePage, RegistrationPage, ProductDetails } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        <Route path="/item" element={<ItemPage />} />
        <Route path="/free" element={<FreePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/product/:productId' element={<ProductDetails/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
