import { Link, useNavigate } from "react-router"
import logotype from "../assets/logo-type.png"
import logo from "../assets/logo.png"
import styles from "./GlobalHeader.module.css"

function GlobalHeader() {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav_wrapper}>
          <Link to="/home" className={styles.logo_wrapper}>
            <img className={styles.logo} src={logo} alt="로고" />
            <img className={styles.logotype} src={logotype} alt="로고" />
          </Link>
          <nav className={styles.navigation}>
            <a href="#">자유게시판</a>
            <Link to="/">중고마켓</Link>
          </nav>
        </div>
        <button onClick={handleLogin} className={styles.btn_login}>
          로그인
        </button>
      </div>
    </header>
  )
}

export default GlobalHeader
