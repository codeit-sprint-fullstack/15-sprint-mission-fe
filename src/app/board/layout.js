import * as styles from "./layout.css.js";

export default function BoardLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
