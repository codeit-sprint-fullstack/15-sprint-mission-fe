"use client";

import styles from "./ErrorView.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorView({ reset, link, target }) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className={styles.container} role="alert">
      <p className={styles.message}>문제가 생겼습니다</p>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.retryButton}
          onClick={handleRetry}
        >
          다시 시도
        </button>
        <Link href={`${link}`} className={styles.link}>
          {target}으로 가기
        </Link>
      </div>
    </div>
  );
}
