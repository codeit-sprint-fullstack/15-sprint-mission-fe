"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Header/Nav";
import styles from "./createPost.module.css";
import { useState } from "react";
import { articleApi } from "@/components/api/articleApi";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const parsedTitle = title.trim();
  const parsedContent = content.trim();

  const isValid = parsedTitle !== "" && parsedContent !== "";

  const submit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    try {
      const res = await articleApi.post({
        title: parsedTitle,
        content: parsedContent,
      });
      if (res.data) router.push(`/community-detail/${res.data.id}`);
    } catch {
      router.push("/error");
    }
  };

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <form className={styles.createPostForm} onSubmit={submit}>
        <div className={styles.writeHeader}>
          <h1 className={styles.headertitle}>게시글 쓰기</h1>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isValid}
          >
            등록
          </button>
        </div>
        <div className={styles.titleField}>
          <label htmlFor="title" className={styles.title}>
            *제목
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
          />
        </div>
        <div className={styles.contentField}>
          <label htmlFor="content" className={styles.content}>
            *내용
          </label>
          <input
            id="content"
            name="content"
            type="text"
            placeholder="내용을 입력해주세요"
            className={styles.contentInput}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </form>
      <Footer />
    </>
  );
}
