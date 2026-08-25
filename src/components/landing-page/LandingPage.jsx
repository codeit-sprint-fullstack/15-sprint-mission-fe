import Nav from '../Nav';
import { Header } from './Header';
import { Card } from './Card';
import Footer from '../Footer';
import cardImage1 from '../../assets/Img_home_01.png';
import cardImage2 from '../../assets/Img_home_02.png';
import cardImage3 from '../../assets/Img_home_03.png';

export function LandingPage() {
  return (
    <>
      <Nav />
      <Header />
      <Card
        imgSrc={cardImage1}
        imgAlt="하트가 표시된 상품을 보고 있는 판다 캐릭터 이미지"
        h2="Hot item"
        p1="인기 상품을"
        p2="확인해 보세요"
        p3="가장 HOT한 중고거래 물픔을"
        p4="판다 마켓에서 확인해 보세요"
      />
      <Card
        imgSrc={cardImage2}
        imgAlt="돋보기로 상품을 검색하는 이미지"
        h2="Search"
        p1="구매를 원하는"
        p2="상품을 검색하세요"
        p3="구매하고 싶은 물품은 검색해서"
        p4="쉽게 찾아보세요"
      />
      <Card imgSrc={cardImage3}
      imgAlt="상품 사진들과 마술 지팡이 이미지"
      h2="Register"
      p1="판매를 원하는"
      p2="상품을 등록하세요"
      p3="어떤 물건이든 판매하고 싶은 상품을"
      p4="쉽게 등록하세요"/>
      <Footer />
    </>
  );
}
