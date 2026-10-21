const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5001/api";

const isDefined = (value) =>
  value !== undefined && value !== null && value !== "";

const toQueryString = (query = {}) =>
  new URLSearchParams(
    Object.entries(query)
      .filter(([, value]) => isDefined(value))
      .map(([key, value]) => [key, String(value)]),
  ).toString();

const buildRequestUrl = (path, query = {}) => {
  const base = API_BASE_URL.endsWith("/") ? API_BASE_URL : `${API_BASE_URL}/`;
  const relative = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relative, base);
  const qs = toQueryString(query);
  if (qs) url.search = qs;
  return url.toString();
};

const toRequestError = (response, payload) => {
  const message = payload?.message ?? `HTTP ${response.status}`;
  const error = new Error(message);
  error.status = response.status;
  return error;
};

async function parsePayload(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function requestApi(path, options = {}) {
  const {
    method = "GET",
    body,
    query,
    headers,
    cache = "no-store",
    next,
    credentials = "include",
  } = options;
  const requestBody = body ? JSON.stringify(body) : undefined;

  const response = await fetch(buildRequestUrl(path, query), {
    method,
    cache,
    credentials,
    headers: {
      Accept: "application/json",
      ...(requestBody ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    ...(requestBody ? { body: requestBody } : {}),
    ...(next ? { next } : {}),
  });

  if (response.status === 204) return null;

  const payload = await parsePayload(response);

  if (!response.ok) {
    throw toRequestError(response, payload);
  }

  return payload?.success === true ? payload.data : payload;
}
