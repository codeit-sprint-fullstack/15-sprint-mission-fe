import pandaLogo from '../assets/icons/panda-logo.svg';
import './NavBar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <a href="/" className="navbar__logo">
            <img src={pandaLogo} alt="" className="navbar__logo-icon" />
            판다마켓
          </a>
          <nav className="navbar__menu">
            <a href="#">자유게시판</a>
            <a href="#">중고마켓</a>
          </nav>
        </div>
        <button type="button" className="navbar__login">
          로그인
        </button>
      </div>
    </header>
  );
}
