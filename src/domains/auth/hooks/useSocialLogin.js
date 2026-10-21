"use client";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5001/api";

export function moveToSocialLogin(provider, next = "/") {
  const url = new URL(`${API_BASE_URL}/auth/social/${provider}/login`);
  url.searchParams.set("next", next);

  window.location.assign(url.toString());
}
