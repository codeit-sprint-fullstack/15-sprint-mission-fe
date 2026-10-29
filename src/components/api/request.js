const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function request(
  path,
  { method = "GET", params, body, errorMessage = "요청 실패" } = {},
) {
  const query = params
    ? new URLSearchParams(
        Object.entries(params).filter(
          ([, value]) => value != null && value !== "",
        ),
      ).toString()
    : "";

  const res = await fetch(`${BASE_URL}${path}${query ? `?${query}` : ""}`, {
    headers: body ? { "Content-Type": "application/json" } : undefined,
    method: method.toUpperCase(),
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(errorMessage);
  }

  if (res.status === 204) return null;

  return await res.json();
}
