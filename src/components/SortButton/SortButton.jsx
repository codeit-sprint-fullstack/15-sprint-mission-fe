import { useState } from "react";
import dropDownIcon from "../../assets/ic_arrow_down.svg";
import mobileSortIcon from "../../assets/ic_sort.svg";
import styles from "./SortButton.module.css";

export function SortButton({ standard, onChange, mobileIcon, className }) {
  const SORT_OPTION = [
    { value: "recent", label: "최신순" },
    { value: "favorite", label: "인기순" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.sortWrapper} ${className ?? ""}`}>
      <div
        className={mobileIcon ? styles.mobileIcon : styles.sortButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {mobileIcon ? (
          <img src={mobileSortIcon} alt="모바일_정렬_아이콘" />
        ) : (
          <>
            {SORT_OPTION.find((option) => option.value === standard)?.label ??
              "정렬"}
            <img src={dropDownIcon} alt="드롭다운 아이콘" />
          </>
        )}
      </div>
      {isOpen && (
        <ul className={mobileIcon ? styles.mobileSortList : styles.sortList}>
          {SORT_OPTION.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  onChange(option.value);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
