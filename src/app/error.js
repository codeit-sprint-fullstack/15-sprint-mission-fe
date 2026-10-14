"use client";

import styles from "./error.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ reset }) {
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
        <Link href="/" className={styles.homeLink}>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
