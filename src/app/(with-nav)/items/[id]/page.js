import Link from "next/link";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  return (
    <div>
      상세페이지: {id} <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
