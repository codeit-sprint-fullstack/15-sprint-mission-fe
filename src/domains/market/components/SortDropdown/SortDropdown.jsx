"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { CaretDownIcon, SortIcon } from "@/components/Icons";
import * as styles from "./SortDropdown.css";

export const SORT_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "인기순" },
  { value: "oldest", label: "오래된순" },
];

export function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false), open);

  const current = SORT_OPTIONS.find((option) => option.value === value) ?? SORT_OPTIONS[0];

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`정렬: ${current.label}`}
      >
        <span className={styles.label}>{current.label}</span>
        <span className={styles.caret}>
          <CaretDownIcon />
        </span>
        <span className={styles.mobileIcon}>
          <SortIcon />
        </span>
      </button>
      {open && (
        <ul className={styles.menu} role="listbox">
          {SORT_OPTIONS.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={styles.menuItem}
            >
              <button
                type="button"
                className={styles.menuButton}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
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