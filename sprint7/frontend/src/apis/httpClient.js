import axios from "axios";
import { getToken } from "@/utils/token";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5001/api";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use((response) => {
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
});

export function getErrorMessage(error, fallback = "문제가 발생했어요. 잠시 후 다시 시도해 주세요.") {
  const message = error?.response?.data?.message;
  if (Array.isArray(message)) return message.join("\n");
  if (typeof message === "string" && message) return message;
  return fallback;
}

export default httpClient;