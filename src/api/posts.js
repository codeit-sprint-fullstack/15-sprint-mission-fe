const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getPosts = async (page = 1, limit = 10, sort = 'recent', keyword) => {
  try {
    const url = new URL(`${API_BASE_URL}`);
    url.searchParams.set('page', page);
    url.searchParams.set('limit', limit);
    url.searchParams.set('sort', sort);
    if (keyword) url.searchParams.set('keyword', keyword);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`요청 실패: ${response.status}`);
    }

    const posts = await response.json();

    return {
      data: posts.data,
      totalCount: Number(posts.totalCount),
      totalPages: Number(posts.totalPages),
      isSuccess: posts.success,
      message: posts.message,
    };
  } catch (error) {
    console.error('[getPosts] Error:', error);
    return {
      data: [],
      totalCount: 0,
      totalPages: 0,
      isSuccess: false,
      message: error.message,
    };
  }
};

export const getPostById = async (id) => {
  if (!id) return console.log('ID 미입력');
  const url = new URL(`${API_BASE_URL}/${id}`);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  const post = await response.json();
  const data = post.data;
  const idValue = post._id;

  return {
    data,
    idValue,
  };
};

export const createPost = async (name, description, price, tags = [], img) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      price,
      tags,
      img,
    }),
  });
  if (!response.ok) {
    return isSuccess;
  }
  const data = await response.json();
  const isSuccess = data.success;
  const id = data.data.id;

  const value = { isSuccess, id };
  return value;
};
