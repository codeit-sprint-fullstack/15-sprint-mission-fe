import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Header({ children }) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="판다 마켓 로고 이미지" width={160} />
      </Link>

      {children}
      <Link href="/registration" className={styles.logInButton}>
        로그인
      </Link>
    </header>
  );
}
export default Header;
