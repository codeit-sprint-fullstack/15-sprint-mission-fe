import styles from "./home.module.css";
import Link from "next/link";
import Image from "next/image";
import topImg from "@/assets/images/home/img_home_top.png";
import firstImg from "@/assets/images/home/img_home_01.png";
import secondImg from "@/assets/images/home/img_home_02.png";
import thirdImg from "@/assets/images/home/img_home_03.png";
import bottomImg from "@/assets/images/home/img_home_bottom.png";

export default function HomePage() {
  return (
    <main>
      <section className={styles.mainVisual}>
        <div className={styles.inner2}>
          <div className={styles.mainTitle}>
            <h1>
              <span>일상의 모든 물건을 </span>
              <span>거래해 보세요</span>
            </h1>
            <Link href="/items" className={styles.searchBtn}>
              구경하러 가기
            </Link>
          </div>
          <Image
            className={styles.mainVisualImg}
            src={topImg}
            alt="판다마켓 메인 배너"
            width={746}
            height={340}
          />
        </div>
      </section>
      <section>
        <div className={`${styles.inner3} ${styles.inner3first}`}>
          <Image
            src={firstImg}
            alt="인기 상품을 확인해 보세요"
            width={588}
            height={444}
          />
          <div className={styles.content}>
            <p className={styles.hotItem}>Hot item</p>
            <h1 className={styles.contentTitle}>
              <span>인기 상품을 </span>
              <span>확인해 보세요</span>
            </h1>
            <p className={styles.description}>
              <span>가장 HOT한 중고거래 물품을 </span>
              <span>판다 마켓에서 확인해 보세요</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={`${styles.inner3} ${styles.reverseContent}`}>
          <Image
            src={secondImg}
            alt="상품을 검색하세요"
            width={588}
            height={444}
          />
          <div className={styles.content}>
            <p className={styles.hotItem}>Search</p>
            <h1 className={styles.contentTitle}>
              <span>구매를 원하는 </span>
              <span>상품을 검색하세요</span>
            </h1>
            <p className={styles.description}>
              <span>구매하고 싶은 물품은 검색에서 </span>
              <span>쉽게 찾아보세요</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.inner3}>
          <Image
            src={thirdImg}
            alt="상품을 등록하세요"
            width={588}
            height={444}
          />
          <div className={styles.content}>
            <p className={styles.hotItem}>Register</p>
            <h1 className={styles.contentTitle}>
              <span>판매를 원하는 </span>
              <span>상품을 등록하세요</span>
            </h1>
            <p className={styles.description}>
              <span>어떤 물건이든 판매하고 싶은 상품을</span>

              <span>쉽게 등록하세요</span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bottom}>
        <div className={styles.inner2}>
          <h1 className={styles.contentTitle}>
            <span>믿을 수 있는 </span>
            <span>판다마켓 중고 거래</span>
          </h1>
          <Image
            src={bottomImg}
            alt="믿을 수 있는 판다마켓 중고 거래"
            width={746}
            height={397}
          />
        </div>
      </section>
    </main>
  );
}
