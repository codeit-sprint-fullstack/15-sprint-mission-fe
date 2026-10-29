import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ errorMessage }) {
  return (
    <p role="alert" className={styles.errorMessage}>
      {errorMessage}
    </p>
  );
}
