import styles from "./MarketFooter.module.css";

export function MarketFooter() {
  return (
    <footer>
      <div className={styles.marketFooter}>
        <p className={styles.nameYear}>©codeit-2024</p>
        <div className={styles.privateFaq}>
          <a className="emptyPage" href="/private">
            private Policy
          </a>
          <a className="emptyPage" href="/faq">
            FAQ
          </a>
        </div>

        <div className={styles.snsDiv}>
          <a
            className="item"
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
          >
            <img
              className="linkIcon"
              src="./src/assets/ic_facebook.png"
              alt="페이스북g"
            />
          </a>

          <a className="item" href="https://x.com/?lang=ko" target="_blank">
            <img
              className="linkIcon"
              src="./src/assets/ic_twitter.png"
              alt="트위터"
            />
          </a>

          <a className="item" href="https://www.youtube.com/" target="_blank">
            <img
              className="linkIcon"
              src="./src/assets/ic_youtube.png"
              alt="유튜브"
            />
          </a>

          <a className="item" href="https://www.instagram.com/" target="_blank">
            <img
              className="linkIcon"
              src="./src/assets/ic_instagram.png"
              alt="인스타그램"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
