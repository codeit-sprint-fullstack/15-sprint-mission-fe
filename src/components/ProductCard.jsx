function ProductCard({ image, title, price, likes }) {
  return (
    <div className="flex flex-col w-full max-w-[282px] gap-2.5">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square object-cover rounded-2xl"
      ></img>
      <p className="text-[14px] text-[#1F2937]">{title}</p>
      <p className="font-bold text-[#1F2937]">{price.toLocaleString()}원</p>
      <p className="font-medium text-[12px] text-[#4B5563]">♡ {likes}</p>
    </div>
  );
}
export default ProductCard;
