import styles from './Navbar.module.css';
import pandaFace from '../svg/img_panda_face.svg';

export default function Navbar () {
 
 return (
  <header>
     <nav>
        <a className={styles.logoLink} href="/" >
          <img src={pandaFace} alt="판다 로고 이미지" />
          <div className={styles.logoText}>판다마켓</div>
        </a>
        <button className={styles.btnLogin} href="/">자유게시판</button>
        <button className={styles.btnLogin} href="/">중고마켓</button>
        <button className={styles.btnLogin} href="/">로그인</button>
      </nav>
  </header>
  );
}