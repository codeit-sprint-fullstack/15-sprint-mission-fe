import style from '../styles/Nav.module.css';
import logo from '../assets/logo.png'

export default function Nav() {
  return (
    <div className={style.navOutbox}>
      <nav>
        <a class={style.navLogo} href="./index.html">
          <img src={logo} alt="판다 얼굴이 있는 판다마켓 로고" />
        </a>
        <a className={style.loginButton} href="./login.html">
          로그인
        </a>
      </nav>
    </div>
  );
}
