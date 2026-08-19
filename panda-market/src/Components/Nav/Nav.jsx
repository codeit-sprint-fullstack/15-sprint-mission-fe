import logo from '../../assets/pandamarketlogo.png';
import './Nav.css'

export const Nav = () => {
  return (
    <nav>
      <div className="navContainer">
        <img
          className="logoImg"
          src={logo}
          alt="#logo"
        />
        <p className="goBoard">자유게시판</p>
        <p className="secondShop">중고마켓</p>
      </div>
      <div className="login">
        <div className="loginBtn">로그인</div>
      </div>
    </nav>
  );
};
