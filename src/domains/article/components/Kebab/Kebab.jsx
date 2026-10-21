"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as styles from "./Kebab.css";

export function Kebab({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
    <div className={styles.kebab} ref={ref}>
      <button
        type="button"
        className={styles.dots}
        aria-label="메뉴"
        onClick={() => setOpen((value) => !value)}
      >
        <Image src="/assets/board/ic_kebab.svg" alt="" width={24} height={24} />
      </button>
      {open && (
        <div className={styles.menu}>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
          >
            수정하기
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
