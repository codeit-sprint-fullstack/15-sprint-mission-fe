import * as styles from "@/styles/home.css.js";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroHeaders}>
            <h1 className={styles.heroTitle}>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <Link className={styles.heroLink} href="/items">
              구경하러 가기
            </Link>
          </div>
          <Image
            className={styles.image}
            src="/home/img-top.png"
            alt="장바구니를 들고 있는 팬더 일러스트 이미지"
            width={746}
            height={340}
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.wrapper}>
            <Image
              className={styles.image}
              src="/home/img-01.png"
              alt="인기 상품 아이템 일러스트 이미지"
              width={588}
              height={444}
            />
            <div className={styles.header}>
              <div className={styles.tag}>Hot item</div>
              <h2 className={styles.title}>
                인기 상품을
                <br />
                확인해 보세요
              </h2>
              <p className={styles.text}>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div className={styles.tag}>Search</div>
              <h2 className={styles.title}>
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <p className={styles.text}>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <Image
              className={styles.image}
              src="/home/img-02.png"
              alt="인기 상품 아이템 일러스트 이미지"
              width={588}
              height={444}
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.wrapper}>
            <Image
              className={styles.image}
              src="/home/img-03.png"
              alt="인기 상품 아이템 일러스트 이미지"
              width={588}
              height={444}
            />
            <div className={styles.header}>
              <div className={styles.tag}>Register</div>
              <h2 className={styles.title}>
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <p className={styles.text}>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.bottomInner}>
          <div className={styles.bottomWrapper}>
            <div className={styles.bottomHeader}>
              <h3 className={styles.bottomTitle}>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h3>
            </div>
            <Image
              className={styles.image}
              src="/home/img-bottom.png"
              alt="판다마켓 중고거래 일러스트 이미지"
              width={746}
              height={397}
            />
          </div>
        </div>
      </section>
    </>
  );
}
