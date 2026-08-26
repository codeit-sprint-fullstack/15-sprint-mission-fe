import { Link } from 'react-router';
import logo from '../../assets/pandamarketlogo.png';
import './NavLanding.css';

export const NavLanding = () => {
  return (
    <nav>
      <div className="navContainer">
        <Link to="/">
          <img className="logoImg" src={logo} alt="#logo" />
        </Link>
      </div>
      <div className="login">
        <div className="loginBtn">로그인</div>
      </div>
    </nav>
  );
};
