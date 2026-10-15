"use client";

import { ErrorView } from "@/components/common/ErrorView";

export default function Error({ reset }) {
  const link = "/community";
  const target = "게시판";

  return <ErrorView reset={reset} link={link} target={target} />;
}
