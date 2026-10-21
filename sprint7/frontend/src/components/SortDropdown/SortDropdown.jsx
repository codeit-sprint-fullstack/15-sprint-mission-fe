"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as styles from "@/styles/shared.css";

const ITEM_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "oldest", label: "오래된순" },
];

const ARTICLE_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "like", label: "인기순" },
  { value: "oldest", label: "오래된순" },
];

export function SortDropdown({ orderBy, onChange, options = ITEM_OPTIONS }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current =
    options.find((option) => option.value === orderBy) ?? options[0];

  useEffect(() => {
    const close = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className={styles.sortDropdown} ref={ref}>
      <button
        type="button"
        className={styles.sortTrigger}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.label}
        <Image
          src="/assets/icons/ic_arrow_down.svg"
          alt=""
          width={20}
          height={20}
          className={styles.sortArrow}
        />
      </button>

      {open && (
        <div className={styles.sortMenu} role="listbox">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === orderBy}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { ARTICLE_OPTIONS, ITEM_OPTIONS };
