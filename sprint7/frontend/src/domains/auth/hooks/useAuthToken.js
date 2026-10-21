"use client";

import { useSyncExternalStore } from "react";
import { getToken, subscribeToken } from "@/utils/token";

export function useAuthToken() {
  return useSyncExternalStore(subscribeToken, getToken, () => null);
}