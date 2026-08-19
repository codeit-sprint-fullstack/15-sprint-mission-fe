import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <>
      <h1>랜딩페이지입니다.</h1>
      <Link to="/login">로그인</Link>
      <Link to="/item">구경하러 가</Link>
      <Footer />
    </>
  );
}
