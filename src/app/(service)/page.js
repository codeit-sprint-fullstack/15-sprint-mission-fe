import imgHomeBottom from '@/assets/landing/img_home_bottom.svg';
import imgHomeTop from '@/assets/landing/img_home_top.svg';

import imgHome01 from '@/assets/landing/img_home_01.svg';
import imgHome02 from '@/assets/landing/img_home_02.svg';
import imgHome03 from '@/assets/landing/img_home_03.svg';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from '../page.css';

export default function Home() {
  return (
    <article>
      {/* 탑배너 */}
      <section className={styles.topBannerContainer}>
        <div className={styles.topBannerContent}>
          <div>
            <p className={styles.topBannerDesc}>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </p>
            <Link href={'/items'} className={styles.topBannerBtn}>
              구경하러 가기
            </Link>
          </div>
          <Image
            className={styles.topBannerImg}
            src={imgHomeTop}
            alt="탑 배너 이미지"
          />
        </div>
      </section>
      {/* 특장점 */}
      <section>
        <section className={styles.featureContainer}>
          <div className={styles.featureContent}>
            <Image
              className={styles.featureContentImg}
              src={imgHome01}
              alt="판다마켓 장점 이미지1"
            />
            <div>
              <p className={styles.featureDescLabel}>Hot item</p>
              <p className={styles.featureDescTitle}>
                인기 상품을
                <br />
                확인해 보세요
              </p>
              <p className={styles.featureDesc}>
                가장 HOT한 중고거래 물품을
                <br /> 판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </section>
        <section className={styles.featureContainer}>
          <div className={clsx(styles.featureContent, styles.featureReverse)}>
            <Image
              className={clsx(
                styles.featureContentImg,
                styles.featureReverseImg,
              )}
              src={imgHome02}
              alt="판다마켓 장점 이미지2"
            />
            <div className={styles.featureReverseDescContainer}>
              <p className={styles.featureDescLabel}>search</p>
              <p className={styles.featureDescTitle}>
                구매를 원하는
                <br />
                상품을 검색하세요
              </p>
              <p className={styles.featureDesc}>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
        </section>
        <section className={styles.featureContainer}>
          <div className={styles.featureContent}>
            <Image
              className={styles.featureContentImg}
              src={imgHome03}
              alt="판다마켓 장점 이미지3"
            />
            <div>
              <p className={styles.featureDescLabel}>Register</p>
              <p className={styles.featureDescTitle}>
                판매를 원하는
                <br />
                상품을 등록하세요
              </p>
              <p className={styles.featureDesc}>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* 바텀배너 */}
      <section className={styles.bottomBannerContainer}>
        <div className={styles.bottomBannerContent}>
          <p className={styles.bottomBannerDesc}>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </p>
          <Image
            className={styles.bottomBannerImg}
            src={imgHomeBottom}
            alt="바텀 배너 이미지"
          />
        </div>
      </section>
    </article>
  );
}
