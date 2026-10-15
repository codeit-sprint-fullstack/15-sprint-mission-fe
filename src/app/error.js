"use client";

import { ErrorView } from "@/components/common/ErrorView";

export default function Error({ reset }) {
  const link = "/";
  const target = "홈";

  return <ErrorView reset={reset} link={link} target={target} />;
}
