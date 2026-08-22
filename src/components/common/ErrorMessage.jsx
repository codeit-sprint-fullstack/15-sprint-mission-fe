import error_image from "@/assets/common/error_image.svg";

export default function ErrorMessage({
  message = "상품 정보를 가져오지 못했어요",
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <img
        src={error_image}
        alt="에러 일러스트"
        width={196}
        height={196}
      />
      <p className="mt-4 text-[#6B7280] text-center">{message}</p>
    </div>
  );
}