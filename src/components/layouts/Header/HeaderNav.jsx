"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as styles from "./Header.css.js";

export default function HeaderNav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div>
      <Link className={styles.item} href="/board">
        자유게시판
      </Link>
      <Link className={styles.item} href="/items">
        중고마켓
      </Link>
    </div>
  );
}
