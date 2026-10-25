import Link from "next/link";
import Image from "next/image";
import * as styles from "./Footer.css.js";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.company}>©codeit - 2024</div>
        <div className={styles.info}>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div className={styles.social}>
          <Link href="https://www.facebook.com/">
            <Image
              src="/logo/facebook.svg"
              alt="페이스북 로고"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://x.com/">
            <Image
              src="/logo/twitter.svg"
              alt="트위터 로고"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image
              src="/logo/youtube.svg"
              alt="유튜브 로고"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image
              src="/logo/instagram.svg"
              alt="인스타그램 로고"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
