import styles from './Footer.module.css';
import { CiFacebook, CiTwitter, CiYoutube, CiInstagram } from 'react-icons/ci';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>©codeit - 2024</p>
        <div className={styles.footer__center}>
          <a className={styles.footer__policy} href="#">
            Privacy Policy
          </a>
          <a className={styles.footer__faq} href="#">
            FAQ
          </a>
        </div>
        <div className={styles.sns}>
          <a
            className={styles.sns__icon}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="페이스북"
          >
            <CiFacebook />
          </a>
          <a
            className={styles.sns__icon}
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X, 구 트위터"
          >
            <CiTwitter />
          </a>
          <a
            className={styles.sns__icon}
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="유튜브"
          >
            <CiYoutube />
          </a>
          <a
            className={styles.sns__icon}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="인스타그램"
          >
            <CiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
