import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import styles from '../styles/LandingPage.module.css';

export function LandingPage() {
  const location = useLocation();
  const navigation = useNavigate();
  console.log('현재위치:', location.pathname);
  if (location.pathname === '/') {
    return (
      <div className={styles.landingBody}>
        <div className={styles.navBody}>
          <Link className={styles.pandaLogo} to="/">
            <img src="판다 얼굴.svg" />
            판다마켓
          </Link>
          <Link to="/login" className={styles.loginButton}>
            로그인
          </Link>
        </div>


        <div className={styles.landingTopSectionBody}>
          <div className={styles.landingTopSectionContent1}>
            <div className={styles.ment}>일상의 모든 물건을 거래해보세요</div>
              <button onClick={() => navigation('/item')} className={styles.itemButton}>구경하러 가기</button>
          </div>
          <img
            src="Img_home_top.png"
            className={styles.landingTopSectionContent2}
          />
        </div>


        <div className={styles.landingMiddleSectionBody}>
          <img
            src="Img_home_01.png"
            className={styles.landingMiddleSectionContent1}
          />
          <div className={styles.landingMiddleSectionContent2}>
            <p className={styles.ment1}>Hot item</p>
            <p className={styles.ment2}>인기 상품을 확인해 보세요</p>
            <p className={styles.ment3}>
              가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>


        <div className={styles.landingMiddleSectionBody} >
          <div className={`${styles.landingMiddleSectionContent2} ${styles.patch1content1}`}>          
            <p className={`${styles.ment1} ${styles.patch1ment1}`}>Search</p>
            <p className={`${styles.ment2} ${styles.patch1ment2}`}>구매를 원하는 상품을 검색하세요</p>
            <p className={`${styles.ment3} ${styles.patch1ment3}`}>
              구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
            </p>
          </div>
          <img
            src="Img_home_02.png"
            className={styles.landingMiddleSectionContent1}
          />
        </div>


        <div className={styles.landingMiddleSectionBody}>
          <img
            src="Img_home_03.png"
            className={styles.landingMiddleSectionContent1}
          />
          <div className={styles.landingMiddleSectionContent2}>
            <p className={styles.ment1}>Register</p>
            <p className={styles.ment2}>판매를 원하는 상품을 등록하세요</p>
            <p className={styles.ment3}>
              어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  } else {
    return (
      <>
        <Menu />
        <Outlet />
        <Footer />
      </>
    );
  }
}
