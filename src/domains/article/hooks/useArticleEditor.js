"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createArticle, updateArticle, uploadImage } from "@/apis";
import { TEXT_LIMIT } from "@/constants/limits";
import { toErrorMessage } from "@/domains/article/utils/articleMessages";

const MAX_IMAGES = 3;

export function useArticleEditor({ article = null } = {}) {
  const router = useRouter();
  const isEditMode = article !== null;

  const [title, setTitle] = useState(article?.title ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [images, setImages] = useState(
    () => article?.images?.map((url, i) => ({ id: `init-${i}`, url })) ?? [],
  );
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const openFilePicker = () => {
    if (images.length >= MAX_IMAGES) {
      setImageError(true);
      return;
    }
    fileRef.current?.click();
  };

  const handleFiles = (event) => {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (files.length === 0) return;

    const room = MAX_IMAGES - images.length;
    if (files.length > room) setImageError(true);
    else setImageError(false);

    const added = files.slice(0, room).map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...added]);
  };

  const removeImage = (id) => {
    setImages((prev) => {
      const target = prev.find((image) => image.id === id);
      if (target?.file) URL.revokeObjectURL(target.url);
      return prev.filter((image) => image.id !== id);
    });
    setImageError(false);
  };

  const submit = async () => {
    if (!title.trim() || !content.trim() || isSubmitting) {
      return;
    }
    if (title.length > TEXT_LIMIT.articleTitle || content.length > TEXT_LIMIT.articleContent) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const urls = await Promise.all(
        images.map((image) =>
          image.file ? uploadImage(image.file) : Promise.resolve(image.url),
        ),
      );

      if (isEditMode) {
        await updateArticle(article.id, {
          title: title.trim(),
          content: content.trim(),
          images: urls,
        });
        router.push(`/board/${article.id}`);
      } else {
        const created = await createArticle({
          title: title.trim(),
          content: content.trim(),
          images: urls,
        });
        router.push(`/board/${created.id}`);
      }
      images.forEach((image) => image.file && URL.revokeObjectURL(image.url));
      router.refresh();
    } catch (error) {
      setErrorMessage(toErrorMessage(error, "게시글을 저장하지 못했어요."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isEditMode,
    title,
    setTitle,
    content,
    setContent,
    images,
    imageError,
    fileRef,
    openFilePicker,
    handleFiles,
    removeImage,
    isSubmitting,
    errorMessage,
    submit,
  };
}
