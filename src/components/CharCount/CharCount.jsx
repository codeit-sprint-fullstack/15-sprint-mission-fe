"use client";

import * as styles from "./CharCount.css";

export function CharCount({ value = "", max, className }) {
  const length = value.length;

  return (
    <span
      className={[
        length > max ? `${styles.count} ${styles.over}` : styles.count,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {length}/{max}
    </span>
  );
}
