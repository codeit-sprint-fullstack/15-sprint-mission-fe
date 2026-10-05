// src/app/movies/[id]/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>게시글을 찾을 수 없습니다.</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}