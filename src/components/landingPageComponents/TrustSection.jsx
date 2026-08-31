import img_home_bottom from "@/assets/landing/img_home_bottom.svg";

function TrustSection() {
  return (
    <section className="w-full bg-[#CFE5FF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto h-[540px] md:h-[771px] xl:h-[540px] px-6 md:px-10 flex flex-col xl:flex-row items-center justify-between relative">
        <div className="flex flex-col items-start pt-12 pl-8 md:pt-16 xl:pt-48 z-10 gap-8 pb-[60px]">
          <h1 className="text-[40px] md:text-4xl xl:text-4xl font-bold text-[#374151] leading-[1.4]">
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h1>
        </div>

        <div className="w-full xl:w-auto flex justify-center xl:justify-end items-end h-full absolute bottom-0 xl:relative">
          <img
            src={img_home_bottom}
            alt="홈 판다 이미지"
            className="w-auto max-h-[280px] md:max-h-[450px] xl:max-h-[480px] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
