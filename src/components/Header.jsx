import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logomenu">
          <img src="./image/logo.png" alt="판다마켓" className="logo" />
          <div className="menu">
            <span>자유게시판</span>
            <span>중고마켓</span>
          </div>
        </div>
        <button className="login-btn">로그인</button>
      </nav>
    </header>
  );
}

export default Header;
