import Link from "next/link";
import Image from "next/image";
import * as styles from "./AuthShell.css";

export function AuthShell({ children }) {
  return (
    <div className={styles.shell}>
      <Link href="/items" className={styles.logo} aria-label="판다마켓 홈">
        <Image
          src="/images/logo-face-104.svg"
          alt=""
          width={104}
          height={104}
          className={styles.mark}
        />
        <span className={styles.brand}>판다마켓</span>
      </Link>
      <div className={styles.content}>{children}</div>
    </div>
  );
}