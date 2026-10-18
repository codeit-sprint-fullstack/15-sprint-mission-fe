"use client";

import { useState } from "react";

import styles from "./ActionMenu.module.css";
import Image from "next/image";
import moreMenu from "@/assets/icons/settingIcon.svg";

export default function ActionMenu({ id, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.actionMenu}>
      <button
        className={styles.actionMenuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <Image
          src={moreMenu}
          alt="관리 메뉴"
          width={24}
          height={24}
          className={styles.actionMenuImg}
        />
      </button>
      {isOpen && (
        <ul className={styles.menuList}>
          <li className={styles.menuEdit}>
            <button type="button" onClick={() => onEdit(id)}>
              수정하기
            </button>
          </li>
          <li className={styles.menuDelete}>
            <button type="button" onClick={() => onDelete(id)}>
              삭제하기
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
