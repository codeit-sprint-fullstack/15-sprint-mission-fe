import { Link } from 'react-router';
import logo from '../../assets/pandamarketlogo.png';
import './Nav.css';

export const Nav = () => {
  return (
    <nav>
      <div className="navContainer">
        <Link to="/">
          <img className="logoImg" src={logo} alt="#logo" />
        </Link>
        <p className="goBoard">자유게시판</p>
        <Link className='secondShop' to='/items'>중고마켓</Link>
      </div>
      <div className="login">
        <div className="loginBtn">로그인</div>
      </div>
    </nav>
  );
};
