import defaultProductImage from "@/assets/items/defaultProductImage.svg";

const fallbackSrc =
  typeof defaultProductImage === "string"
    ? defaultProductImage
    : defaultProductImage.default || defaultProductImage.src;

function ProductCard({ product }) {
  if (!product) return null;

  const initialImage = product.images?.[0] || product.imagesUrl || fallbackSrc;

  return (
    <div className="flex flex-col w-full max-w-[282px] gap-2.5">
      <img
        src={initialImage}
        alt={`${product.name} 이미지`}
        className="w-full aspect-square object-cover rounded-2xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackSrc;
        }}
      />
      <p className="text-[14px] text-[#1F2937]">{product.name}</p>
      <p className="font-bold text-[#1F2937]">
        {product.price?.toLocaleString()}원
      </p>
      <p className="font-medium text-[12px] text-[#4B5563]">
        ♡ {product.favoriteCount ?? 0}
      </p>
    </div>
  );
}
export default ProductCard;
