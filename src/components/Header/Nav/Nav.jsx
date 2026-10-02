import Link from "next/link";
import styles from "./Nav.module.css";

function Nav({ classNameAdd }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="#">자유게시판</Link>
        <Link href="/Items" className={styles[classNameAdd]}>
          중고마켓
        </Link>
      </nav>
    </>
  );
}
export default Nav;
