import * as styles from "./ContentContainer.css";

export function ContentContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
