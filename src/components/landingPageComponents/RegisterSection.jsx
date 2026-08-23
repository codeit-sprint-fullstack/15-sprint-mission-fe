import img_home_register from "@/assets/landing/img_home_register.svg";

function RegisterSection() {
  return (
    <section className="w-full bg-[#ffffff] overflow-hidden flex justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-center max-w-[1920px] mx-auto px-4 xl:px-[344px] py-16 xl:py-[138px]">
        <img
          src={img_home_register}
          alt="인기 상품 일러스트"
          className="w-[344px] md:w-[696px] xl:w-[658px] max-w-full shrink-0 object-contain"
        />

        <div className="flex flex-col bg-[#FCFCFC] w-[344px] md:w-[696px] xl:w-auto px-6 py-4 md:px-12 xl:px-16 xl:py-34 text-left shrink-0">
          <p className="text-[#3692FF] font-bold text-[16px] xl:text-[18px] leading-[26px] mb-2">
            Register
          </p>
          <h2 className="text-[28px] md:text-[36px] xl:text-[40px] font-bold text-[#374151] mb-4 leading-[1.3] xl:leading-[1.4] break-keep">
            판매를 원하는&nbsp;
            <span className="hidden xl:block" />
            상품을 등록하세요
          </h2>
          <p className="font-medium text-[18px] md:text-[22px] xl:text-[24px] text-[#374151] leading-7 xl:leading-8 break-keep">
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
