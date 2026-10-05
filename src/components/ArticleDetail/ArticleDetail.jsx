"use client";

import Image from "next/image";
import profileImg from "@/assets/ic_profile.svg";
import heartImg from "@/assets/ic_heart.svg";
import dotMenu from "@/assets/ic_kebab.svg";
import * as styles from "./ArticleDetail.css.js";
import { useState } from "react";
import Link from "next/link.js";
import { useRouter } from "next/navigation.js";

export default function ArticleDetail({ article }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date(article.data.createdAt).toLocaleDateString();
  const articleId = article.data.id;

  const handleRemove = async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const response = await fetch("/api/articles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleId,
        }),
      });
      if (!response.ok) {
        throw new Error("게시글 삭제에 실패했습니다.");
      }

      alert("게시글이 삭제 되었습니다.");
      router.push("/articles");
    } catch (error) {
      console.log(error.message);
      alert("게시글 삭제에 실패했습니다.");
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <div className={styles.title}>{article.data.title}</div>
          <Image
            src={dotMenu}
            alt="dotMenu"
            className={styles.dotMenu}
            onClick={() => setIsOpen((prev) => !prev)}
            width={24}
          />
          {isOpen && (
            <ul className={styles.menuOpen}>
              <Link
                href={`/articles/${articleId}/updating`}
                className={styles.menuA}
              >
                수정하기
              </Link>
              <button className={styles.menuB} onClick={handleRemove}>
                삭제하기
              </button>
            </ul>
          )}
        </div>
        <div className={styles.info}>
          <Image src={profileImg} alt="profileImg" width={40} height={40} />
          <div className={styles.name}>{article.data.writer.name}</div>
          <div className={styles.date}>{date}</div>
          <div className={styles.box}>
            <div className={styles.like}>
              <Image src={heartImg} alt="heartImg" width={32} height={32} />
              <div className={styles.likeCount}>999</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div>{article.data.content}</div>
      </div>
    </>
  );
}
