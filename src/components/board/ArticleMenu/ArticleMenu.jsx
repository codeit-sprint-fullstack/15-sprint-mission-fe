"use client";

import Link from "next/link";
import Image from "next/image";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteArticle } from "@/lib/api";
import * as styles from "./ArticleMenu.css.js";

export default function ArticleMenu({ articleId }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const handleDelete = async () => {
    await deleteArticle(articleId);
    router.push("/board");
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/icon/kebab.svg" alt="더보기" width={24} height={24} />
      </button>
      {isOpen && (
        <ul className={styles.menu} id={menuId}>
          <li>
            <Link className={styles.item} href={`/board/${articleId}/edit`}>
              수정하기
            </Link>
          </li>
          <li>
            <button
              className={styles.item}
              type="button"
              onClick={handleDelete}
            >
              삭제하기
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
