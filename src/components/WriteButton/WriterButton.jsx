"use client";

import { useRouter } from "next/navigation";
import * as styles from "./WriteButton.css";

export default function WriteButton() {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      onClick={() => router.push("/boards/write")}
    >
      글 쓰기
    </button>
  );
}
