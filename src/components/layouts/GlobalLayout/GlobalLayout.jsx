import Link from "next/link";
import * as styles from "./GlobalLayout.css.js";
import { Footer } from "@/components/Footer";
import logo from "@/assets/pandamarketlogo.png";
import Image from "next/image";

export default function GlobalLayout({ children }) {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logoImg}
              src={logo}
              alt="#logo"
              width="auto"
              height="auto"
              loading="eager"
            />
          </Link>
          <Link href="/articles" className={styles.goBoard}>
            자유게시판
          </Link>
          <Link className={styles.secondShop} href="/items">
            중고마켓
          </Link>
        </div>
        <div className={styles.login}>
          <div>로그인</div>
        </div>
      </nav>
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}
