import { Link } from "react-router"
import ic_facebook from "../assets/ic_facebook.png"
import ic_instagram from "../assets/ic_instagram.png"
import ic_twitter from "../assets/ic_twitter.png"
import ic_youtube from "../assets/ic_youtube.png"
import styles from "./GlobalFooter.module.css"

function GlobalFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.copyright}>©codeit - 2024</div>
        <div className={styles.links}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className={styles.sns}>
          <a href="https://facebook.com" target="_blank">
            <img src={ic_facebook} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={ic_twitter} />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src={ic_youtube} />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={ic_instagram} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default GlobalFooter
