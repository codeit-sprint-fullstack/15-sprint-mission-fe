import ic_facebook from "../assets/ic_facebook.png"
import ic_instagram from "../assets/ic_instagram.png"
import ic_twitter from "../assets/ic_twitter.png"
import ic_youtube from "../assets/ic_youtube.png"
import styles from "./globalFooter.module.css"

function GlobalFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.copyright}>©codeit - 2024</div>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div className={styles.sns}>
          <a href="#">
            <img src={ic_facebook} />
          </a>
          <a href="#">
            <img src={ic_twitter} />
          </a>
          <a href="#">
            <img src={ic_youtube} />
          </a>
          <a href="#">
            <img src={ic_instagram} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default GlobalFooter
