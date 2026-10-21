import { notFound } from "next/navigation";
import { ProductDetailContainer } from "@/domains/market/containers/ProductDetailContainer";
import { parseArticleId } from "@/utils";

export const metadata = {
  title: "상품 상세 | 판다마켓",
};

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const productId = parseArticleId(id);

  if (productId === null) {
    notFound();
  }

  return <ProductDetailContainer productId={productId} />;
}