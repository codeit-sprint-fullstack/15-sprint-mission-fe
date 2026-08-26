import './App.css';
import { PostList } from './pages/PostList';
import { Route, Routes } from 'react-router';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Registration } from './pages/Registration';
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<PostList />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/items/:itemId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
