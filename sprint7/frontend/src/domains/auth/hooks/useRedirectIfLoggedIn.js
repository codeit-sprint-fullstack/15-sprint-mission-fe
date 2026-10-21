"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/utils/token";

export function useRedirectIfLoggedIn() {
  const [wasLoggedIn] = useState(() => Boolean(getToken()));
  const router = useRouter();

  useEffect(() => {
    if (wasLoggedIn) {
      router.replace("/items");
    }
  }, [wasLoggedIn, router]);

  return wasLoggedIn;
}