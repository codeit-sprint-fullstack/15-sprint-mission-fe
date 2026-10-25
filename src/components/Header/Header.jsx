"use client";

import mainIcon from "../../assets/mainIcon.svg";
import styles from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.mainNavContainer}>
        <div className={styles.mainTitle}>
          <Image
            className={styles.desktopTabletOnly}
            src={mainIcon}
            alt="메인_아이콘"
          />

          <h2 onClick={() => router.push("/")}>판다마켓</h2>
        </div>
        <h3 onClick={() => router.push("/boards")}>자유게시판</h3>
        <h3 onClick={() => router.push("/items")}>중고마켓</h3>
      </div>
      <button className={styles.loginButton}>로그인</button>
    </div>
  );
}
