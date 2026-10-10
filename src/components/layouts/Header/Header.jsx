import Link from "next/link";
import Image from "next/image";
import HeaderNav from "./HeaderNav.jsx";
import * as styles from "./Header.css.js";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <nav className={styles.navigation}>
          <Link className={styles.logo} href="/">
            <Image
              src="/panda-logo.svg"
              alt="판다마켓 로고 이미지"
              width={153}
              height={51}
              loading="eager"
            />
          </Link>
          <HeaderNav />
        </nav>
        <Link className={styles.login} href="/login">
          로그인
        </Link>
      </div>
    </header>
  );
}
