"use client";

import { Modal } from "./Modal";
import * as styles from "./Modal.css";

export function AlertModal({ message, onClose }) {
  return (
    <Modal open onClose={onClose}>
      <div className={styles.alert} role="alertdialog" aria-label="알림">
        <p className={styles.alertMessage}>{message}</p>
        <button type="button" className={styles.alertButton} onClick={onClose} autoFocus>
          확인
        </button>
      </div>
    </Modal>
  );
}