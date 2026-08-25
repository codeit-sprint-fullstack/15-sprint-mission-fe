import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

export function Menu() {
  const location = useLocation();
  console.log('lo:',location.pathname);
  return (
    <div className={styles.navBody}>
      <div className={styles.leftSide}>
        <Link className={styles.pandaLogo} to="/">
          <img src="판다 얼굴.svg" />
          판다마켓
        </Link>
        <Link className={`${styles.menuButton} ${location.pathname==='/free' ? styles.select : ''}`} to="/free">
          자유게시판
        </Link>
        <Link className={`${styles.menuButton} ${location.pathname==='/item' ? styles.select : ''}`} to="/item">
          중고마켓
        </Link>
      </div>
      <Link to="/login" className={styles.loginButton}>
        로그인
      </Link>
    </div>
  );
}
