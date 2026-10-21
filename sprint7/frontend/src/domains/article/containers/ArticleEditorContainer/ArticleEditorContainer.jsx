"use client";

import { useArticleEditor } from "@/domains/article/hooks/useArticleEditor";
import { ArticleEditorForm } from "@/domains/article/components/ArticleEditorForm";

export function ArticleEditorContainer({ article }) {
  const editor = useArticleEditor({ article });

  return (
    <ArticleEditorForm
      heading={editor.isEditMode ? "게시글 수정" : "게시글 쓰기"}
      submitLabel={editor.isEditMode ? "수정 완료" : "등록"}
      title={editor.title}
      content={editor.content}
      onTitleChange={editor.setTitle}
      onContentChange={editor.setContent}
      isSubmitting={editor.isSubmitting}
      errorMessage={editor.errorMessage}
      onSubmit={editor.submit}
    />
  );
}
