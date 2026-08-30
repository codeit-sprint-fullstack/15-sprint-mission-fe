import searchIcon from "../../assets/ic_search.svg";
import styles from "./SearchInput.module.css";

export function SearchInput({ inputRef, className }) {
  return (
    <div className={`${styles.searchHeader} ${className ?? ""}`}>
      <div className={styles.searchBox}>
        <img src={searchIcon} alt="검색" />
        <input
          ref={inputRef}
          type="text"
          placeholder="검색할 상품을 입력해주세요"
        />
      </div>
    </div>
  );
}
