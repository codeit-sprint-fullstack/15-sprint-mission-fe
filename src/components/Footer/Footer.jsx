import * as styles from "./Footer.css.js";
import facebook from "@/assets/ic_facebook.svg";
import twitter from "@/assets/ic_twitter.svg";
import youtube from "@/assets/ic_youtube.svg";
import instagram from "@/assets/ic_instagram.svg";
import Image from "next/image.js";

export const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={styles.copyright}>©codeit - 2024</div>
        <div className={styles.policy}>
          <a href="/15-sprint-mission-fe/pages/privacy.html">Privacy Policy</a>
          <a href="/15-sprint-mission-fe/pages/fag.html">FAQ</a>
        </div>
        <div className={styles.sns}>
          <a
            className={styles.snsanchor}
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
          >
            <Image src={facebook} alt="#facebook" />
          </a>
          <a
            className={styles.snsanchor}
            href="https://x.com/?lang=ko"
            target="_blank"
          >
            <Image src={twitter} alt="#twitter" />
          </a>
          <a
            className={styles.snsanchor}
            href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
            target="_blank"
          >
            <Image src={youtube} alt="#youtube" />
          </a>
          <a
            className={styles.snsanchor}
            href="https://www.instagram.com/"
            target="_blank"
          >
            <Image src={instagram} alt="#instagram" />
          </a>
        </div>
      </footer>
  );
};
