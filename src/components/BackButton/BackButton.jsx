"use client";

import Link from "next/link";
import Image from "next/image";
import * as styles from "./BackButton.css";

export function BackButton({ href, children = "목록으로 돌아가기" }) {
  return (
    <div className={styles.backWrap}>
      <Link href={href} className={styles.back}>
        {children}
        <Image src="/images/back.svg" alt="" width={24} height={24} />
      </Link>
    </div>
  );
}