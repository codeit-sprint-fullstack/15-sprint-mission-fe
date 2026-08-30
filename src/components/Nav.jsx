import { Link } from 'react-router';
import style from '../styles/Nav.module.css';
import logo from '../assets/logo.png'

export default function Nav() {
  return (
    <div className={style.navOutbox}>
      <nav>
        <Link to="/" className={style.navLogo}>
          <img src={logo} alt="판다 얼굴이 있는 판다마켓 로고" />
        </Link>
        <a className={style.loginButton} href="./login.html">
          로그인
        </a>
      </nav>
    </div>
  );
}
