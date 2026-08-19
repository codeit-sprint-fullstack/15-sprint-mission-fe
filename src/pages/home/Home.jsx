import Img_home_bottom from "@/assets/Img_home_bottom.png"
import Img_home_top from "@/assets/Img_home_top.png"
import section_popularity from "@/assets/section_popularity.png"
import section_registration from "@/assets/section_registration.png"
import section_search from "@/assets/section_search.png"
import { useNavigate } from "react-router"
import styles from "./Home.module.css"

function Home() {
  const navigate = useNavigate()
  const handleViewMarket = () => {
    navigate("/items")
  }

  return (
    <article>
      <section className={styles.hero_container}>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_message}>
            <p>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </p>
            <button onClick={handleViewMarket}>구경하러 가기</button>
          </div>
          <img className={styles.hero_img} src={Img_home_top} />
        </div>
      </section>
      <section className={styles.promotion_container}>
        <div className={styles.promotion_wrapper}>
          <img src={section_popularity} />
          <div className={styles.promotion_message}>
            <p className={styles.promotion_label}>Hot Item</p>
            <p className={styles.promotion_title}>
              인기 상품을
              <br />
              확인해 보세요
            </p>
            <p className={styles.promotion_description}>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>
      <section className={styles.promotion_container}>
        <div className={`${styles.promotion_wrapper} ${styles.right_wrapper}`}>
          <img className={styles.right_img} src={section_search} />
          <div className={styles.promotion_message}>
            <p className={styles.promotion_label}>Search</p>
            <p className={styles.promotion_title}>
              구매를 원하는
              <br />
              상품을 검색하세요
            </p>
            <p className={styles.promotion_description}>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </section>
      <section className={styles.promotion_container}>
        <div className={styles.promotion_wrapper}>
          <img src={section_registration} />
          <div className={styles.promotion_message}>
            <p className={styles.promotion_label}>Register</p>
            <p className={styles.promotion_title}>
              판매를 원하는
              <br />
              상품을 등록하세요
            </p>
            <p className={styles.promotion_description}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      <section className={styles.banner_container}>
        <div className={styles.banner_wrapper}>
          <p>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </p>
          <img src={Img_home_bottom} />
        </div>
      </section>
    </article>
  )
}
export default Home
