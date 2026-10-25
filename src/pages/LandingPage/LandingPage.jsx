import homeTopImg from "../../assets/img_home_top.png";
import homeImg01 from "../../assets/img_home_01.png";
import homeImg02 from "../../assets/img_home_02.png";
import homeImg03 from "../../assets/img_home_03.png";
import homeBottomImg from "../../assets/img_home_bottom.png";

import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/items");
  };
  return (
    <div className={styles.landingHeader}>
      <div className={styles.landingHeaderContainer}>
        <div className={styles.landingHeaderContent}>
          <div className={styles.landingHeaderTitle}>
            <h2>
              일상의 모든 물건을 <br /> 거래해 보세요
            </h2>
            <button onClick={handleClick}>구경하러 가기</button>
          </div>
          <img src={homeTopImg} alt="홈_메인_이미지" />
        </div>
      </div>

      <div className={styles.landingContentList}>
        <div className={styles.landingContent}>
          <img src={homeImg01} alt="홈_내용_이미지_1" />
          <div className={styles.landingContentTitle}>
            <span>Hot Item</span>
            <h2>
              인기 상품을 <br />
              확인해 보세요
            </h2>
            <p>
              가장 HOT한 중고거래 물품을 <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </div>
      <div className={styles.landingContentList}>
        <div className={styles.landingContent}>
          <img src={homeImg02} alt="홈_내용_이미지_2" />
          <div className={styles.landingContentTitle}>
            <span>Search</span>
            <h2>
              구매를 원하는 <br />
              상품을 검색하세요
            </h2>
            <p>
              구매하고 싶은 물품은 검색해서 <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </div>
      <div className={styles.landingContentList}>
        <div className={styles.landingContent}>
          <img src={homeImg03} alt="홈_내용_이미지_3" />
          <div className={styles.landingContentTitle}>
            <span>Register</span>
            <h2>
              판매를 원하는 <br />
              상품을 등록하세요
            </h2>
            <p>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </div>

      <div className={styles.landingHeaderContainer}>
        <div className={styles.landingHeaderContent}>
          <div className={styles.landingHeaderTitle}>
            <h2>
              믿을 수 있는 <br /> 판다마켓 중고 거래
            </h2>
          </div>
          <img src={homeBottomImg} alt="홈_마지막_이미지" />
        </div>
      </div>
    </div>
  );
}
