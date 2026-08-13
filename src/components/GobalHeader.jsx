import logotype from "../assets/logo-type.png"
import logo from "../assets/logo.png"
import styles from "./globalHeader.module.css"

function GlobalHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav_wrapper}>
          <a className={styles.logo_wrapper}>
            <img className={styles.logo} src={logo}></img>
            <img className={styles.logotype} src={logotype}></img>
          </a>
          <nav className={styles.navigation}>
            <a>자유게시판</a>
            <a>중고마켓</a>
          </nav>
        </div>
        <button className={styles.btn_login}>로그인</button>
      </div>
    </header>
  )
}

export default GlobalHeader
