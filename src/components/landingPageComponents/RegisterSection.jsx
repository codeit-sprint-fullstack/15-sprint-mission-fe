import img_home_register from "@/assets/landing/img_home_register.svg";

function RegisterSection() {
  return (
    <section className="w-full bg-[#ffffff] overflow-hidden">
      <div className="flex items-center justify-center max-w-[1920px] mx-auto px-[344px] py-[138px] ">
        <img
          src={img_home_register}
          alt="인기 상품 일러스트"
          className="w-[calc(658px)] shrink-0"
        />

        <div className="flex flex-col bg-[#FCFCFC] px-16 py-34">
          <p className="text-[#3692FF] font-bold text-[18px] leading-[26px] mb-2">
            Hot item
          </p>
          <h2 className="text-[40px] font-bold text-[#374151] mb-4 leading-[1.4]">
            판매를 원하는
            <br />
            상품을 등록하세요
          </h2>
          <p className="font-medium text-[24px] text-[#374151] leading-8">
            어떤 물건이든 판매하고 싶은 상품을
            <br />
            쉽게 등록하세요
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
