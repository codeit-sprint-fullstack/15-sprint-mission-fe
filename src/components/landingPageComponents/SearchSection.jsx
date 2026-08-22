import img_home_search from "@/assets/landing/img_home_search.svg";

function SearchSection() {
  return (
    <section className="w-full bg-[#ffffff] overflow-hidden">
      <div className="flex items-center justify-center max-w-[1920px] mx-auto px-[344px] py-[138px]">
        <div className="flex flex-col bg-[#FCFCFC] px-16 py-34">
          <p className="text-[#3692FF] font-bold text-[18px] leading-[26px] mb-2">
            Search
          </p>
          <h2 className="text-[40px] font-bold text-[#374151] mb-4 leading-[1.4]">
            구매를 원하는
            <br />
            상품을 검색하세요
          </h2>
          <p className="font-medium text-[24px] text-[#374151] leading-8">
            구매하고 싶은 물품은 검색해서
            <br />
            쉽게 찾아보세요
          </p>
        </div>

        <img
          src={img_home_search}
          alt="상품 검색 일러스트"
          className="w-[calc(658px)] shrink-0"
        />
      </div>
    </section>
  );
}

export default SearchSection;