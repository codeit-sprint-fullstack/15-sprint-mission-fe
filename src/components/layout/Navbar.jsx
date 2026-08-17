import { Link } from 'react-router';
import styles from './Navbar.module.css';
import pandaFace from '../svg/img_panda_face.svg';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className={styles.left}>
          <Link className={styles.logoLink} to="/">
            <img src={pandaFace} alt="판다 로고 이미지" />
            <span className={styles.logoText}>판다마켓</span>
          </Link>
          <Link className={styles.navLink} to="/board">
            자유게시판
          </Link>
          <Link className={styles.navLink} to="/">
            중고마켓
          </Link>
        </div>
        <button type="button" className={styles.btnLogin}>
          로그인
        </button>
      </nav>
    </header>
  );
}
