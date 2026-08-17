import "./Header.css";
import pandaMarketLogo from "../assets/panda-market-logo.svg";

function Header() {
    return (
        <header className="header">
            <a className="headerLogo" href="/">
                <img src={pandaMarketLogo} alt="판다마켓" />
            </a>

            <nav className="headerNav" aria-label="주요 메뉴">
                <a href="/articles">자유게시판</a>

                <a href="/" aria-current="page">
                    중고마켓
                </a>
            </nav>

            <a className="headerLogin" href="/login">
                로그인
            </a>
        </header>
    );
}

export default Header;