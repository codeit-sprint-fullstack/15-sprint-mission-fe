import styles from './Footer.module.css';

export function Footer() {
  return <div className={styles.footerBody}>
      <p className={styles.codeit}>©codeit - 2024</p>
      <div className={styles.pfLink}>
        <a href="./pages/privacypolicy.html">Privacy Policy</a>
        <a href="./pages/faq.html">FAQ</a>
      </div>
      <div className={styles.footerIcons}>
        <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <img src="ic_facebook.svg" alt="icon-facebook" />
        </a>
        <a href="https://x.com/?lang=ko" target="_blank">
          <img src="ic_twitter.svg" alt="icon-twitter" />
        </a>
        <a
          href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
          target="_blank"
        >
          <img src="ic_youtube.svg" alt="icon-youtube" />
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <img src="ic_instagram.svg" alt="icon-instar" />
        </a>
      </div>
    </div>
}
