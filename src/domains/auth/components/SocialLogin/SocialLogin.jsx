"use client";

import Image from "next/image";
import { moveToSocialLogin } from "@/domains/auth/hooks/useSocialLogin";
import * as styles from "./SocialLogin.css";

export function SocialLogin() {
  return (
    <div className={styles.social}>
      <span>간편 로그인하기</span>
      <div className={styles.icons}>
        <button
          type="button"
          aria-label="구글로 로그인"
          className={styles.iconLink}
          onClick={() => moveToSocialLogin("google")}
        >
          <Image src="/images/google-bg.svg" alt="" width={42} height={42} />
          <Image
            src="/images/google.png"
            alt=""
            width={22}
            height={22}
            className={styles.glyph}
          />
        </button>
        <button
          type="button"
          aria-label="카카오로 로그인"
          className={styles.iconLink}
          onClick={() => moveToSocialLogin("kakao")}
        >
          <Image src="/images/kakao-bg.svg" alt="" width={42} height={42} />
          <Image
            src="/images/kakao-bubble.svg"
            alt=""
            width={24}
            height={22}
            className={styles.glyph}
          />
        </button>
      </div>
    </div>
  );
}
