import { Link, NavLink, useLocation } from 'react-router-dom';
import pandaLogo from '../assets/icons/panda-logo.svg';
import './NavBar.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const isLandingPage = pathname === '/';

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo">
            <img src={pandaLogo} alt="" className="navbar__logo-icon" />
            판다마켓
          </Link>
          
          {!isLandingPage && (
            <nav className="navbar__menu">
              <a href="#">자유게시판</a>
              <NavLink
                to="/items"
                className={({ isActive }) => (isActive ? 'navbar__menu-item--active' : '')}
              >
                중고마켓
              </NavLink>
            </nav>
          )}
        </div>
        <button type="button" className="navbar__login">
          로그인
        </button>
      </div>
    </header>
  );
}
