"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as styles from "./Header.css.js";

export default function HeaderNav() {
  const pathname = usePathname();
  const isBoardActive = pathname.startsWith("/board");
  const isItemsActive = pathname.startsWith("/items");

  if (pathname === "/") {
    return null;
  }

  return (
    <div>
      <Link
        className={styles.item}
        href="/board"
        aria-current={isBoardActive ? "page" : undefined}
      >
        자유게시판
      </Link>
      <Link
        className={styles.item}
        href="/items"
        aria-current={isItemsActive ? "page" : undefined}
      >
        중고마켓
      </Link>
    </div>
  );
}
