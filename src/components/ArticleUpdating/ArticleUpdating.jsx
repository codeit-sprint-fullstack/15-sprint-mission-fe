"use client";

import { use, useState } from "react";
import * as styles from "@/components/ArticlePosting/ArticlePosting.css.js";
import { useRouter } from "next/navigation.js";

export default function ArticleUpdating({params}) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  //submit 할 때 post api를 불러와야됨
  const [submitting, setSubmitting] = useState(false);
  const {id} = use(params);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputTitle || !inputContent) {
      alert("제목 또는 내용을 입력해주세요");
      return;
    }

    const refineTitle = inputTitle.trim();
    const refineContent = inputContent.trim();

    setSubmitting(true);
    try {
      const response = await fetch("/api/articles", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: refineTitle,
          content: refineContent,
          articleId: id,
        }),
      });

      if (!response.ok) {
        throw new Error("게시글 등록에 실패했습니다.");
      }

      const result = await response.json();

      router.push(`/articles/${result.data.id}`);

    } catch (error) {
      alert(error.message);
    } finally{
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.headContainer} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <div className={styles.headTitle}>게시글 수정하기</div>
        <button 
        type="submit"
        className={styles.registerBtn} 
        disabled={!inputTitle.trim() || !inputContent.trim() || submitting}
        >
          등록
        </button>
      </div>
      <label htmlFor="title">* 제목</label>
      <input
        id="title"
        type="text"
        value={inputTitle}
        className={styles.title}
        placeholder="제목을 입력해주세요"
        onChange={(event) => setInputTitle(event.target.value)}
      />
      <label htmlFor="content">* 내용</label>
      <textarea
        id="content"
        value={inputContent}
        className={styles.content}
        placeholder="내용을 입력해주세요"
        onChange={(event) => setInputContent(event.target.value)}
      />
    </form>
  );
}
