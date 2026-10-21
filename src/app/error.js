"use client";

import { useEffect } from "react";
import { ErrorComponent } from "@/components/ErrorComponent";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorComponent
      title="오류가 발생했습니다"
      description={error?.message}
      onRetry={reset}
    />
  );
}
