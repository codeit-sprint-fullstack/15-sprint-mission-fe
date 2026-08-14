import styles from './SiteLayout.module.css';
import { Link, Outlet } from 'react-router-dom';

export function SiteLayout() {
  return (
    <>
      <div className={styles.navBody}>
        <div className={styles.leftSide}>
          <Link className={styles.pandaLogo} to="/home">
            <img src="판다 얼굴.svg" />
            판다마켓
          </Link>
          <Link className={styles.menuButton} to="/freepage">
            자유게시판
          </Link>
          <Link className={styles.menuButton} to="/usedmarket">
            중고마켓
          </Link>
        </div>
        <Link to="/login" className={styles.loginButton}>
          로그인
        </Link>
      </div>
      <Outlet />
    </>
  );
}
