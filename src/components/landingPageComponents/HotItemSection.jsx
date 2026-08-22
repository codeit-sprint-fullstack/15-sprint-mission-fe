import img_home_hot_item from "@/assets/landing/img_home_hot_item.svg";

function HotItemSection() {
  return (
    <section className="w-full bg-[#ffffff] overflow-hidden">
      <div className="flex items-center justify-center max-w-[1920px] mx-auto px-[344px] py-[138px] ">
        <img
          src={img_home_hot_item}
          alt="인기 상품 일러스트"
          className="w-[calc(658px)] shrink-0"
        />

        <div className="flex flex-col bg-[#FCFCFC] px-16 py-34">
          <p className="text-[#3692FF] font-bold text-[18px] leading-[26px] mb-2">Hot item</p>
          <h2 className="text-[40px] font-bold text-[#374151] mb-4 leading-[1.4]">
            인기 상품을
            <br />
            확인해 보세요
          </h2>
          <p className="font-medium text-[24px] text-[#374151] leading-8">
            가장 HOT한 중고거래 물품을
            <br />
            판다 마켓에서 확인해 보세요
          </p>
        </div>
      </div>
    </section>
  );
}

export default HotItemSection;
