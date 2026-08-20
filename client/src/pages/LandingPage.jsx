import { Link, Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';

export function LandingPage() {
  const location = useLocation();
  console.log('현재위치:', location.pathname);
  if (location.pathname === '/') {
    return (
      <>
        <h1>랜딩페이지입니다.</h1>
        <Link to="/login">로그인</Link>
        <Link to="/item">구경하러 가기</Link>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Menu />
        <Outlet />
        <Footer />
      </>
    );
  }
}
