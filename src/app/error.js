"use client";

import { ErrorView } from "@/components/common/ErrorView";

export default function Error() {
  const link = "/";
  const target = "홈";

  return <ErrorView link={link} target={target} />;
}
