import axios from "axios";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5001/api";

const STATUS_MESSAGES = {
  400: "요청이 올바르지 않아요. 입력한 내용을 다시 확인해 주세요.",
  401: "로그인이 필요해요. 다시 로그인해 주세요.",
  403: "이 작업을 할 권한이 없어요.",
  404: "요청한 정보를 찾을 수 없어요.",
  409: "이미 처리된 요청이에요.",
  500: "서버에 문제가 생겼어요. 잠시 후 다시 시도해 주세요.",
};

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

httpClient.interceptors.response.use(
  (response) => {
    const wrapped = response?.data;
    if (
      wrapped &&
      typeof wrapped === "object" &&
      wrapped.success === true &&
      "data" in wrapped
    ) {
      response.data = wrapped.data;
    }
    return response;
  },
  (error) => Promise.reject(error),
);

export function getErrorMessage(
  error,
  fallback = "문제가 발생했어요. 잠시 후 다시 시도해 주세요.",
) {
  const message = error?.response?.data?.message;
  if (Array.isArray(message)) return message.join("\n");
  if (typeof message === "string" && message) return message;

  const status = error?.response?.status;
  if (status && STATUS_MESSAGES[status]) return STATUS_MESSAGES[status];

  return fallback;
}

export default httpClient;
