import { Link } from 'react-router-dom';
import heroImage from '../assets/landing/Img_home_top.png';
import hotItemImage from '../assets/landing/Img_home_01.png';
import searchImage from '../assets/landing/Img_home_02.png';
import registerImage from '../assets/landing/Img_home_03.png';
import trustImage from '../assets/landing/Img_home_bottom.png';
import './LandingPage.css';

const FEATURES = [
  {
    image: hotItemImage,
    alt: '인기 상품',
    eyebrow: 'Hot item',
    title: (
      <>
        인기 상품을
        <br className="landing-feature-row__break" />
        <span className="landing-feature-row__break-space"> </span>확인해 보세요
      </>
    ),
    description: (
      <>
        가장 HOT한 중고거래 물품을
        <br />
        판다마켓에서 확인해 보세요
      </>
    ),
  },
  {
    image: searchImage,
    alt: '검색',
    eyebrow: 'Search',
    reverse: true,
    title: (
      <>
        구매를 원하는
        <br className="landing-feature-row__break" />
        <span className="landing-feature-row__break-space"> </span>상품을 검색하세요
      </>
    ),
    description: (
      <>
        구매하고 싶은 물품은 검색해서
        <br />
        쉽게 찾아보세요
      </>
    ),
  },
  {
    image: registerImage,
    alt: '상품 등록',
    eyebrow: 'Register',
    title: (
      <>
        판매를 원하는
        <br className="landing-feature-row__break" />
        <span className="landing-feature-row__break-space"> </span>상품을 등록하세요
      </>
    ),
    description: (
      <>
        어떤 물건이든 판매하고 싶은 상품을
        <br />
        쉽게 등록하세요
      </>
    ),
  },
];

export default function LandingPage() {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero__inner">
          <div className="landing-hero__text">
            <h1>
              일상의 모든 물건을
              <br className="landing-hero__break" />
              거래해 보세요
            </h1>
            <Link to="/items" className="landing-hero__cta">
              구경하러 가기
            </Link>
          </div>
          <div className="landing-hero__image">
            <img src={heroImage} alt="판다마켓 캐릭터" />
          </div>
        </div>
      </section>

      <section className="landing-features">
        <div className="landing-features__inner">
          {FEATURES.map((feature) => (
            <div
              key={feature.eyebrow}
              className={`landing-feature-row${feature.reverse ? ' landing-feature-row--reverse' : ''}`}
            >
              <img src={feature.image} alt={feature.alt} />
              <div className="landing-feature-row__text">
                <p className="landing-feature-row__eyebrow">{feature.eyebrow}</p>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-trust">
        <div className="landing-trust__inner">
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
          <div className="landing-trust__image">
            <img src={trustImage} alt="판다마켓 신뢰 거래" />
          </div>
        </div>
      </section>
    </>
  );
}
