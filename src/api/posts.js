const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log('BASE URL:',API_BASE_URL);
export const getPosts = async (
  page = 1,
  limit = 10,
  sort = 'recent',
  keyword,
) => {
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

  const posts = await response.json();
  const data = posts.data;
  const totalCount = posts.totalCount;
  const totalPages = posts.totalPages;
  const isSuccess = posts.success;
  const message = posts.message;

  if (!response.ok) {
    console.log('[getPosts]GET ERROR');
    //throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
    return { isSuccess };
  }

  console.log('[getPosts]받은데이터:', data, isSuccess);

  return {
    data,
    totalCount: Number(totalCount),
    totalPages: Number(totalPages),
    isSuccess,
    message,
  };
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
    console.log('[getPostById]GET ERROR');
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  const post = await response.json();
  const data = post.data;
  const idValue = post._id;

  console.log('[getPostById]받은데이터:', data);

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
    console.log('[createPost]POST ERROR');
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  const data = await response.json();
  const success = data.success;
  const id = data.data.id;
  console.log('createPost:', id, success, data);

  const value = { success, id };
  return value;
};
