import { Home, FreePage, NotFound, UsedMarket, LoginPage } from './pages';
import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from './pages/SiteLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/freepage" element={<FreePage />} />
          <Route path="/usedmarket" element={<UsedMarket />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
