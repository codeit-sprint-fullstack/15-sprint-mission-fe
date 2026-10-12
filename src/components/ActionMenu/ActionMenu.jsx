"use client";

import { useState } from "react";

import styles from "./ActionMenu.module.css";
import Image from "next/image";
import moreMenu from "@/assets/icons/settingIcon.svg";
import { articleApi } from "../api/articleApi";
import { useRouter } from "next/navigation";

export default function ActionMenu({ id }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const articleEdit = async (id) => router.push(`/createPost/${id}/edit`);

  const articleDelete = async (id) => {
    await articleApi.remove(id);
    router.push("/community");
  };

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
            <button type="button" onClick={() => articleEdit(id)}>
              수정하기
            </button>
          </li>
          <li className={styles.menuDelete}>
            <button type="button" onClick={() => articleDelete(id)}>
              삭제하기
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
