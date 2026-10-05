"use client";

import Image from "next/image";
import { useState } from "react";
import downArrow from "@/assets/ic_arrow_down.png";
import * as styles from "./DropDown.css.js";

export default function DropDown({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recent");

  const handleSelect = (event) => {
    const nowSelect = event.currentTarget.dataset.value;
    setSortBy(nowSelect);
    setIsOpen(false);
    onSortChange(nowSelect);
  };
  return (
    <div className={styles.dropDownWrap}>
      <button
        className={isOpen ? styles.openDrop : styles.dropdown}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {sortBy === "recent" ? "최신순" : "인기순"}
        <Image src={downArrow} alt="downArrow" />
      </button>
      {isOpen && (
        <ul className={styles.dropMenus}>
          <li
            className={styles.menuA}
            data-value="recent"
            onClick={handleSelect}
          >
            최신순
          </li>
          <li
            className={styles.menuB}
            data-value="best"
            onClick={handleSelect}
          >
            인기순
          </li>
        </ul>
      )}
    </div>
  );
}
