"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import backArrow from "../../assets/article-detail/back-arrow.svg";
import * as styles from "./BackButton.css.js";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/boards");
  };
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      목록으로 돌아가기
      <span className={styles.icon} aria-hidden="true">
        <Image
          src={backArrow}
          alt=""
          width={19.9}
          height={16.9}
          className={styles.arrow}
        />
      </span>
    </button>
  );
}
