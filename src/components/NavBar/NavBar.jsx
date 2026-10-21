"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useAuth } from "@/domains/auth/hooks/useAuth";
import { useClickOutside } from "@/hooks/useClickOutside";
import * as styles from "./NavBar.css.js";

const pandaLogo = "/assets/icons/panda-logo.svg";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isReady, isLoggedIn, user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const profileRef = useRef(null);
  useClickOutside(profileRef, () => setMenuOpen(false), menuOpen);

  const isLandingPage = pathname === "/";
  const onBoard = pathname.startsWith("/board") || pathname === "/addArticle";
  const onItems = pathname.startsWith("/items") || pathname === "/registration";

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    router.push("/signin");
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={pandaLogo}
              alt="판다마켓 로고"
              className={styles.logoIcon}
              width={40}
              height={40}
            />
            판다마켓
          </Link>

          {!isLandingPage && (
            <nav className={styles.nav}>
              <Link
                href="/board"
                className={clsx(
                  styles.navLink,
                  onBoard && styles.navLinkActive,
                )}
              >
                자유게시판
              </Link>
              <Link
                href="/items"
                className={clsx(
                  styles.navLink,
                  onItems && styles.navLinkActive,
                )}
              >
                중고마켓
              </Link>
            </nav>
          )}
        </div>

        <div className={styles.right}>
          {isReady && !isLoggedIn && (
            <Link href="/signin" className={styles.login}>
              로그인
            </Link>
          )}
          {isReady && isLoggedIn && (
            <div className={styles.profile} ref={profileRef}>
              <button
                type="button"
                className={styles.profileButton}
                onClick={() => setMenuOpen((value) => !value)}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                <Image
                  src={user?.image || "/images/profile-40.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.nickname}>{user?.nickname}</span>
              </button>
              {menuOpen && (
                <div className={styles.menu} role="menu">
                  <button
                    type="button"
                    role="menuitem"
                    className={styles.menuButton}
                    onClick={handleLogout}
                  >
                    로그아웃
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}