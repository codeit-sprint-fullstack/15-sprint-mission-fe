import img_home_search from "@/assets/landing/img_home_search.svg";

function SearchSection() {
  return (
    <section className="w-full bg-[#ffffff] overflow-hidden flex justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-center max-w-[1920px] mx-auto px-4 xl:px-[344px] py-16 xl:py-[138px]">
        <div className="order-2 xl:order-1 flex flex-col bg-[#FCFCFC] w-[344px] md:w-[696px] xl:w-auto px-6 py-4 md:px-12 xl:px-16 xl:py-34 text-right shrink-0">
          <p className="text-[#3692FF] font-bold text-[16px] xl:text-[18px] leading-[26px] mb-2">
            Search
          </p>
          <h2 className="text-[28px] md:text-[36px] xl:text-[40px] font-bold text-[#374151] mb-4 leading-[1.3] xl:leading-[1.4] break-keep">
            구매를 원하는&nbsp;
            <span className="hidden xl:block" />
            상품을 검색하세요
          </h2>
          <p className="font-medium text-[18px] md:text-[22px] xl:text-[24px] text-[#374151] leading-7 xl:leading-8 break-keep">
            구매하고 싶은 물품은 검색해서
            <br />
            쉽게 찾아보세요
          </p>
        </div>

        <img
          src={img_home_search}
          alt="상품 검색 일러스트"
          className="order-1 xl:order-2 w-[344px] md:w-[696px] xl:w-[658px] max-w-full shrink-0 object-contain"
        />
      </div>
    </section>
  );
}

export default SearchSection;