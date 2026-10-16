import { BASE_URL } from "./constants";

export async function getComments(id) {
  const res = await fetch(`${BASE_URL}/articles/${id}/comments`);
  if (!res.ok) throw new Error(`댓글 조회 실패: ${res.status}`);

  return res.json();
}

export async function postComment(id, data) {
  const res = await fetch(`${BASE_URL}/articles/${id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`댓글 등록 실패: ${res.status}`);

  return res.json();
}

export async function updateComment(commentId, data) {
  const res = await fetch(`${BASE_URL}/articles/comments/${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`댓글 수정 실패: ${res.status}`);
}

export async function deleteComment(commentId) {
  const res = await fetch(`${BASE_URL}/articles/comments/${commentId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`댓글 삭제 실패: ${res.status}`);
}
