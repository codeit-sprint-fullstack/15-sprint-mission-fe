import { useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  // 현재주소 가져오기
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <div className="logomenu">
          <img src="/image/logo.png" alt="판다마켓" className="logo" />

          <div className="menu">
            <span>자유게시판</span>
            {/* 현재 주소가 items면 active클래스 붙여라 */}
            <span className={location.pathname === "/items" ? "active" : ""}>
              중고마켓
            </span>
          </div>
        </div>
        <button className="login-btn">로그인</button>
      </nav>
    </header>
  );
}

export default Header;
