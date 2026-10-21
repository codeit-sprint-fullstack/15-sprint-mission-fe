import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { LANDING_IMAGE_SIZE } from "@/constants/uiDimensions";
import * as styles from "@/styles/home.css.js";

const FEATURES = [
  {
    image: "/assets/landing/Img_home_01.png",
    alt: "인기 상품",
    eyebrow: "Hot item",
    title: (
      <>
        인기 상품을
        <br className={styles.featureBreak} />
        확인해 보세요
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
    image: "/assets/landing/Img_home_02.png",
    alt: "검색",
    eyebrow: "Search",
    reverse: true,
    title: (
      <>
        구매를 원하는
        <br className={styles.featureBreak} />
        상품을 검색하세요
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
    image: "/assets/landing/Img_home_03.png",
    alt: "상품 등록",
    eyebrow: "Register",
    title: (
      <>
        판매를 원하는
        <br className={styles.featureBreak} />
        상품을 등록하세요
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

export function HomePageContainer() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              일상의 모든 물건을
              <br className={styles.heroBreak} />
              거래해 보세요
            </h1>
            <Link href="/items" className={styles.heroCta}>
              구경하러 가기
            </Link>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/assets/landing/Img_home_top.png"
              alt="판다마켓 캐릭터"
              width={LANDING_IMAGE_SIZE.hero.width}
              height={LANDING_IMAGE_SIZE.hero.height}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresInner}>
          {FEATURES.map((feature) => (
            <div
              key={feature.eyebrow}
              className={clsx(
                styles.featureRow,
                feature.reverse && styles.featureRowReverse,
              )}
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                width={LANDING_IMAGE_SIZE.feature.width}
                height={LANDING_IMAGE_SIZE.feature.height}
                className={styles.featureImage}
              />
              <div className={styles.featureText}>
                <p className={styles.featureEyebrow}>{feature.eyebrow}</p>
                <h2 className={styles.featureTitle}>{feature.title}</h2>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.trust}>
        <div className={styles.trustInner}>
          <h2 className={styles.trustTitle}>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
          <div className={styles.trustImageWrap}>
            <Image
              src="/assets/landing/Img_home_bottom.png"
              alt="판다마켓 신뢰 거래"
              width={LANDING_IMAGE_SIZE.trust.width}
              height={LANDING_IMAGE_SIZE.trust.height}
              className={styles.trustImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
