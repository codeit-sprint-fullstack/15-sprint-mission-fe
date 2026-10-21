import Image from "next/image";
import * as styles from "./SocialLogin.css";

const SOCIAL_LINKS = [
  {
    href: "https://www.google.com",
    label: "구글로 로그인",
    bg: "/images/google-bg.svg",
    glyph: "/images/google.png",
    glyphWidth: 22,
    glyphHeight: 22,
  },
  {
    href: "https://www.kakaocorp.com/page",
    label: "카카오로 로그인",
    bg: "/images/kakao-bg.svg",
    glyph: "/images/kakao-bubble.svg",
    glyphWidth: 24,
    glyphHeight: 22,
  },
];

export function SocialLogin() {
  return (
    <div className={styles.social}>
      <span>간편 로그인하기</span>
      <div className={styles.icons}>
        {SOCIAL_LINKS.map((item) => (
          <a key={item.href} href={item.href} aria-label={item.label} className={styles.iconLink}>
            <Image src={item.bg} alt="" width={42} height={42} />
            <Image
              src={item.glyph}
              alt=""
              width={item.glyphWidth}
              height={item.glyphHeight}
              className={styles.glyph}
            />
          </a>
        ))}
      </div>
    </div>
  );
}