"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href="/community"
        className={pathname === "/community" ? styles.active : ""}
      >
        자유게시판
      </Link>
      <Link
        href="/items"
        className={pathname === "/items" ? styles.active : ""}
      >
        중고마켓
      </Link>
    </nav>
  );
}
