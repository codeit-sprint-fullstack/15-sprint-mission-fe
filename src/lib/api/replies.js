const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const createReply = async (newReply) => {
  const response = await fetch(`${BASE_URL}/api/article-replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReply),
  });

  if (!response.ok) {
    throw new Error('댓글 등록 중 오류가 발생했습니다.');
  }

  return response.json();
};

export const fetchReplies = async ({ articleId, cursor, limit = 10 }) => {
  const params = new URLSearchParams({
    articleId: String(articleId),
    limit: String(limit),
  });

  if (cursor) {
    params.append('cursor', String(cursor));
  }

  const response = await fetch(
    `${BASE_URL}/api/article-replies?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error('댓글 목록을 불러오는데 실패했습니다.');
  }

  return response.json();
};
