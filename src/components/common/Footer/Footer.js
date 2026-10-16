import * as styles from "./Footer.css.js";
import icFacebook from "@/assets/images/ic-facebook.svg";
import icTwitter from "@/assets/images/ic-twitter.svg";
import icYoutube from "@/assets/images/ic-youtube.svg";
import icInstagram from "@/assets/images/ic-instagram.svg";
import Image from "next/image.js";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.codeit}>@codeit - 2024</span>
        <div className={styles.midGroup}>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className={styles.icons}>
          <Image src={icFacebook} alt="페이스북 아이콘" />
          <Image src={icTwitter} alt="트위터 아이콘" />
          <Image src={icYoutube} alt="유튜브 아이콘" />
          <Image src={icInstagram} alt="인스타그램 아이콘" />
        </div>
      </div>
    </footer>
  );
}
