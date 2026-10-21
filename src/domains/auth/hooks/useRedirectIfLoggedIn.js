"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/domains/auth/hooks/useAuth";

export function useRedirectIfLoggedIn() {
  const { isLoggedIn, isReady } = useAuth();
  const router = useRouter();
  const redirecting = isReady && isLoggedIn;

  useEffect(() => {
    if (redirecting) {
      router.replace("/items");
    }
  }, [redirecting, router]);

  return redirecting;
}
