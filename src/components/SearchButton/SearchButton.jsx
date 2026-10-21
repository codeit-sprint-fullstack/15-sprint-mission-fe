import styles from "./SearchButton.module.css";

export function SearchButton({ onClick, className }) {
  return (
    <button
      className={`${styles.searchButton} ${className ?? ""}`}
      onClick={onClick}
    >
      상품 등록하기
    </button>
  );
}
