"use client";

import { ErrorView } from "@/components/common/ErrorView";

export default function Error() {
  const link = "/community";
  const target = "게시판";

  return <ErrorView link={link} target={target} />;
}
