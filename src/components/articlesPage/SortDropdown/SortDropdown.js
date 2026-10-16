"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import icArrowDown from "@/assets/images/ic-arrow-down.svg";
import Image from "next/image";
import * as styles from "./SortDropdown.css";

const SORT_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "likes", label: "좋아요순" },
];

export default function SortDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentOrder = searchParams.get("orderBy") ?? "recent";

  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === currentOrder)?.label ||
    "정렬 선택";

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("orderBy", value);
    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div className={styles.sortDropdownContainer} ref={dropdownRef}>
      <button
        type="button"
        className={styles.sortDropdown}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{currentLabel}</span>
        <Image
          className={clsx(styles.arrowIcon, { [styles.rotate]: isOpen })}
          src={icArrowDown}
          alt=""
          width={24}
          height={24}
        />
      </button>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {SORT_OPTIONS.map(({ value, label }) => (
            <li
              key={value}
              className={clsx(styles.dropdownItem, {
                [styles.selected]: value === currentOrder,
              })}
              onClick={() => handleSelect(value)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
