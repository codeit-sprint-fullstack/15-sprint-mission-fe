import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopyright}>&copy; codeit - 2024</div>
      <div className={styles.footerLinks}>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <ul className={styles.footerSocial}>
        <li>
          <Link href="https://www.facebook.com/?locale=ko_KR">
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link href="https://x.com/home?lang=ko">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/">
            <FaYoutube />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/">
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
