const BASE_URL = 'https://panda-market-api.vercel.app';

// 로그인
export const signIn = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/auth/signIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error('로그인에 실패했습니다.');
  }

  return responseData;
};

// 회원 가입
export const signUp = async ({
  email,
  nickname,
  password,
  passwordConfirmation,
}) => {
  const response = await fetch(`${BASE_URL}/auth/signUp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      nickname,
      password,
      passwordConfirmation,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};

// 내 정보 조회
export const getMe = async (accessToken) => {
  if (!accessToken) {
    throw new Error('인증 토큰이 없습니다.');
  }

  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error('유저 정보를 불러오는데 실패했습니다.');
  }

  return responseData;
};

// 토큰 갱신
export const refreshAccessToken = async (refreshToken) => {
  if (!refreshToken) {
    throw new Error('리프레쉬 토큰이 없습니다.');
  }

  const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error('토큰 갱신에 실패했습니다.');
  }

  return responseData;
};
