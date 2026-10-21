"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

function getSnapshot() {
  if (typeof window === "undefined") return null;
  const width = window.innerWidth;
  if (width >= 1200) return "pc";
  if (width >= 744) return "tablet";
  return "mobile";
}

export function useBreakpoint() {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}