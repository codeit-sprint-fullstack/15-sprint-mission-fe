import { API_BASE_URL } from "../constants/api";

export async function getComments({ targetType, targetId }) {
  const response = await fetch(
    `${API_BASE_URL}/${targetType}/${targetId}/comments`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("댓글 조회 실패");
  }

  return response.json();
}

export async function postComment({ targeType, targetId, content }) {
  const response = await fetch(
    `${API_BASE_URL}/${targeType}/${targetId}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: content.trim(),
      }),
    },
  );
  if (!response.ok) {
    throw new Error("댓글 생성 실패");
  }
}

export async function deleteComment({ targetType, targetId, commentId }) {
  const response = await fetch(
    `${API_BASE_URL}/${targetType}/${targetId}/comments/${commentId}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("댓글 삭제 실패");
  }
}

export async function patchComment({
  targetType,
  targetId,
  commentId,
  content,
}) {
  const response = await fetch(
    `${API_BASE_URL}/${targetType}/${targetId}/comments/${commentId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: content.trim(),
      }),
    },
  );

  if (!response.ok) {
    throw new Error("댓글 수정 실패");
  }
}
