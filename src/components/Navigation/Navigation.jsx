import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div className={styles.navBody}>
      <div className={styles.leftSide}>
        <Link className={styles.pandaLogo} to="/">
          <img src="판다 얼굴.svg" />
          판다마켓
        </Link>
        <p>자유게시판</p>
        <p>중고마켓</p>
      </div>

      <button className={styles.loginButton}>로그인</button>
    </div>
  );
}
