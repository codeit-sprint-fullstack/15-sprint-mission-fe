"use client";

import { useState } from "react";
import Image from "next/image";
import * as styles from "./TextField.css";

export function TextField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  error,
  registration,
}) {
  const isPassword = type === "password";
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={`${styles.inputWrap} ${error ? styles.hasError : ""}`}>
        <input
          id={id}
          type={isPassword && visible ? "text" : type}
          className={styles.input}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          {...registration}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setVisible((value) => !value)}
            aria-label={visible ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            <Image
              src={visible ? "/images/eye-on.svg" : "/images/eye-off.svg"}
              alt=""
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}