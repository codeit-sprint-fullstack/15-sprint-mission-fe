import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  // 현재주소 가져오기
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <div className="logomenu">
          {/*로고클릭시 메인페이지 */}
          <Link to="/" className="logo-link">
            <img src="/image/logo.png" alt="판다마켓" className="logo" />
          </Link>

          <div className="menu">
            <span>자유게시판</span>
            {/* 현재 주소가 items면 active클래스 붙여라 */}
            <Link
              to="/items"
              className={location.pathname === "/items" ? "active" : ""}
            >
              중고마켓
            </Link>
          </div>
        </div>
        <button className="login-btn">로그인</button>
      </nav>
    </header>
  );
}

export default Header;
