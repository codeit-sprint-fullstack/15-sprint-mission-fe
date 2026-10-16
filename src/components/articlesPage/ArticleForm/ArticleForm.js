"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createArticle, updateArticle } from "@/lib/api/articlesAPI";
import * as styles from "./ArticleForm.css";

export default function ArticleForm({ article }) {
  const isEditing = Boolean(article?.id);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: article?.title ?? "",
      content: article?.content ?? "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const savedArticle = isEditing
        ? await updateArticle(article.id, data)
        : await createArticle(data);
      router.push(`/articles/${savedArticle?.id ?? article.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const required = { validate: (value) => value.trim() !== "" };

  return (
    <form
      className={isEditing ? styles.editForm : styles.registerForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>
          {isEditing ? "게시글 수정" : "게시글 쓰기"}
        </h1>
        <button
          className={styles.submitButton}
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "저장 중..." : isEditing ? "수정하기" : "등록"}
        </button>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="article-title">
            *제목
          </label>
          <input
            id="article-title"
            className={styles.titleInput}
            type="text"
            placeholder="제목을 입력해주세요"
            {...register("title", required)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="article-content">
            *내용
          </label>
          <textarea
            id="article-content"
            className={styles.contentTextarea}
            placeholder="내용을 입력해주세요"
            {...register("content", required)}
          />
        </div>
      </div>
    </form>
  );
}
