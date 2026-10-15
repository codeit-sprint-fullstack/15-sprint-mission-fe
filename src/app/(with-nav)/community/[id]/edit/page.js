"use client";

import styles from "@/app/(with-nav)/community/new/createPost.module.css";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { articleApi } from "@/components/api/articleApi";
import { ErrorMessage } from "@/components/common/ErrorMessage";

export default function UpdatePost() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const parsedTitle = title.trim();
  const parsedContent = content.trim();

  const isValid = parsedTitle !== "" && parsedContent !== "";

  const submit = async (e) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await articleApi.patch(id, {
        title: parsedTitle,
        content: parsedContent,
      });

      if (res.data) {
        router.push(`/community/${res.data.id}`);
      } else {
        setErrorMessage("게시글 수정에 실패했어요. 다시 시도해주세요.");
      }
    } catch {
      setErrorMessage("수정 중 문제가 생겼어요. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={styles.createPostForm}
      onSubmit={submit}
      aria-busy={isSubmitting}
    >
      <div className={styles.writeHeader}>
        <h1 className={styles.headerTitle}>게시글 수정하기</h1>
        <button
          type="submit"
          className={styles.submitButton}
          aria-disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "등록 중..." : "등록"}
        </button>
      </div>
      <div className={styles.titleField}>
        <label htmlFor="title" className={styles.titleLabel}>
          <span aria-hidden={true}>*</span>제목
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          className={styles.titleInput}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
        />
      </div>
      <div className={styles.contentField}>
        <label htmlFor="content" className={styles.contentLabel}>
          <span aria-hidden={true}>*</span>내용
        </label>
        <textarea
          id="content"
          name="content"
          className={styles.contentInput}
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={500}
        >
          내용을 입력해주세요
        </textarea>
      </div>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </form>
  );
}
