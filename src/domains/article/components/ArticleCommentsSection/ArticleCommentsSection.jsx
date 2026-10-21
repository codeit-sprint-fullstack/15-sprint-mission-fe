"use client";

import { CommentsEmpty } from "@/domains/article/components/CommentsEmpty";
import { CommentItem } from "@/domains/article/components/ArticleCommentsSection/CommentItem";
import { CharCount } from "@/components/CharCount";
import { inlineStart } from "@/components/CharCount/CharCount.css";
import { TEXT_LIMIT } from "@/constants/limits";
import { btn, field } from "@/styles/shared.css";
import {
  cmtSubmit,
  commentArea,
  subHeading,
} from "@/domains/article/containers/ArticleDetailContainer/ArticleDetailContainer.css";

export function ArticleCommentsSection({ thread }) {
  const {
    comments,
    draft,
    setDraft,
    isPending,
    handleCreate,
    handleEdit,
    handleDelete,
  } = thread;

  return (
    <div>
      <h3 className={subHeading}>댓글달기</h3>

      <textarea
        className={`${field} ${commentArea}`}
        placeholder="댓글을 입력해주세요."
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
      />
      <div className={cmtSubmit}>
        <CharCount
          value={draft}
          max={TEXT_LIMIT.comment}
          className={inlineStart}
        />
        <button
          type="button"
          className={btn}
          disabled={isPending || !draft.trim() || draft.length > TEXT_LIMIT.comment}
          onClick={handleCreate}
        >
          등록
        </button>
      </div>

      {comments.length === 0 ? (
        <CommentsEmpty />
      ) : (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onSave={(text) => handleEdit(comment.id, text)}
            onDelete={() => handleDelete(comment.id)}
          />
        ))
      )}
    </div>
  );
}
