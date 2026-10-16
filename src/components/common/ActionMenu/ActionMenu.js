"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import icKebab from "@/assets/images/ic-kebab.svg";
import * as styles from "./ActionMenu.css";

export default function ActionMenu({
  onEdit,
  onDelete,
  label = "항목 메뉴",
  deleteErrorMessage = "삭제에 실패했어요.",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError("");

    try {
      await onDelete();
      setIsDeleteModalOpen(false);
    } catch (requestError) {
      setError(requestError.message || deleteErrorMessage);
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.container} ref={menuRef}>
      <button
        type="button"
        className={styles.menuButton}
        aria-label={label}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Image src={icKebab} alt="" width={24} height={24} />
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          <li className={styles.dropdownRow}>
            <button
              type="button"
              className={styles.dropdownItem}
              onClick={() => {
                setIsOpen(false);
                onEdit();
              }}
            >
              수정하기
            </button>
          </li>
          <li className={styles.dropdownRow}>
            <button
              type="button"
              className={styles.dropdownItem}
              onClick={() => {
                setIsOpen(false);
                setError("");
                setIsDeleteModalOpen(true);
              }}
            >
              삭제하기
            </button>
          </li>
        </ul>
      )}

      {isDeleteModalOpen && (
        <div className={styles.modalOverlay}>
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-item-title"
          >
            <h2 id="delete-item-title">정말 삭제하시겠습니까?</h2>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                disabled={isDeleting}
                onClick={() => setIsDeleteModalOpen(false)}
              >
                취소
              </button>
              <button
                type="button"
                className={styles.deleteButton}
                disabled={isDeleting}
                onClick={handleDelete}
              >
                {isDeleting ? "삭제 중..." : "삭제하기"}
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
