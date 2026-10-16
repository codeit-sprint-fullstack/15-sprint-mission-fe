"use client";

import * as styles from "./Header.css.js";
import pandaLogo from "@/assets/images/panda-logo.svg";
import Image from "next/image.js";
import Link from "next/link.js";
import clsx from "clsx";
import { usePathname } from "next/navigation.js";

const NAV_ITEMS = [
  { href: "/articles", label: "자유게시판" },
  { href: "/items", label: "중고마켓" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftGroup}>
          <Link href="/" className={styles.logoLink}>
            <Image src={pandaLogo} alt="판다마켓 로고" width={40} height={40} />
            <span className={styles.logoText}>판다마켓</span>
          </Link>

          <nav className={styles.nav}>
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    styles.navLink,
                    isActive && styles.navLinkActive,
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link href="/login" className={styles.loginButton}>
          로그인
        </Link>
      </div>
    </header>
  );
}
