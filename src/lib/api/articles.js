const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchArticles = async (params = {}) => {
  const baseUrl = `${BASE_URL}/api/articles`;
  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  const requestUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error('게시글 목록을 불러오는데 실패했습니다.');
  }

  return response.json();
};

export const createArticle = async (newArticle) => {
  const response = await fetch(`${BASE_URL}/api/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newArticle),
  });

  if (!response.ok) {
    throw new Error('게시글 등록 실패');
  }
  return response.json();
};

export const fetchArticle = async (id) => {
  const response = await fetch(`${BASE_URL}/api/articles/${id}`);
  if (!response.ok) {
    throw new Error('게시글 호출 실패');
  }

  return response.json();
};

export const deleteArticle = async (id) => {
  const response = await fetch(`${BASE_URL}/api/articles/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('게시글 삭제 실패');
  }

  return response.json();
};
