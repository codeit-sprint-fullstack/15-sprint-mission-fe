"use client";

import { ErrorComponent } from "@/components/ErrorComponent";

export default function GlobalError({ reset }) {
  return (
    <html lang="ko">
      <body>
        <ErrorComponent
          title="서비스 오류가 발생했어요."
          description="전체 페이지 렌더링 중 문제가 발생했습니다. 다시 시도해 주세요."
          onRetry={reset}
        />
      </body>
    </html>
  );
}
