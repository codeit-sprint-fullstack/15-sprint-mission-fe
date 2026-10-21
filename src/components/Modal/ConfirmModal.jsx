"use client";

import Image from "next/image";
import { Modal } from "./Modal";
import * as styles from "./Modal.css";

export function ConfirmModal({
  message,
  cancelText = "취소",
  confirmText = "네",
  onCancel,
  onConfirm,
  isLoading = false,
}) {
  return (
    <Modal open onClose={onCancel}>
      <div className={styles.confirm} role="alertdialog" aria-label="확인">
        <span className={styles.check}>
          <Image src="/images/modal-red-circle.svg" alt="" width={24} height={24} />
          <Image
            src="/images/modal-check.svg"
            alt=""
            width={12}
            height={12}
            className={styles.checkMark}
          />
        </span>
        <p className={styles.confirmMessage}>{message}</p>
        <div className={styles.confirmButtons}>
          <button type="button" className={styles.cancelButton} onClick={onCancel}>
            {cancelText}
          </button>
          <button
            type="button"
            className={styles.confirmButton}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}