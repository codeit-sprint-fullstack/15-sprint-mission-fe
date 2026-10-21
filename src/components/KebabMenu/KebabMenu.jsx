"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { KebabIcon } from "@/components/Icons";
import * as styles from "./KebabMenu.css";

export function KebabMenu({ onEdit, onDelete, label = "더보기" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((value) => !value)}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <KebabIcon />
      </button>
      {open && (
        <ul className={styles.menu} role="menu">
          <li>
            <button
              type="button"
              role="menuitem"
              className={styles.menuButton}
              onClick={() => {
                setOpen(false);
                onEdit?.();
              }}
            >
              수정하기
            </button>
          </li>
          <li>
            <button
              type="button"
              role="menuitem"
              className={styles.menuButton}
              onClick={() => {
                setOpen(false);
                onDelete?.();
              }}
            >
              삭제하기
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}