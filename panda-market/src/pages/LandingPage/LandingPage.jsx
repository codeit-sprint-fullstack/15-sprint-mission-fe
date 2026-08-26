import { Link } from 'react-router';
import { Footer } from '../../Components/Footer/Footer';
import { NavLanding } from '../../Components/NavLanding/NavLanding';
import './LandingPage.css';

export function LandingPage() {
  return (
    <>
      <NavLanding />
      <section>
        <div className="section01">
          <div className="wrap-section01">
            <div className="goitem">
              <div className="content-01">
                <p>일상의 모든 물건을</p>
                <p>거래해 보세요</p>
              </div>
              <button>
                <Link to="/items">구경하러 가기</Link>
              </button>
            </div>
            <div className="section01-img"></div>
          </div>
        </div>
        <div className="section02">
          <div className="wrap-section02">
            <div className="section02-img"></div>
            <div className="goitem02">
              <div className="hotbadge">Hot item</div>
              <div className="content-02">
                <p>인기 상품을</p>
                <p>확인해 보세요</p>
              </div>
              <p>가장 HOT한 중고거래 물품을판다 마켓에서 확인해 보세요</p>
            </div>
          </div>
        </div>
        <div className="section03">
          <div className="wrap-section03">
            <div className="section03-img"></div>
            <div className="goitem03">
              <div className="search">Search</div>
              <div className="content-03">
                <p>구매를 원하는</p>
                <p>상품을 검색하세요</p>
              </div>
              <p>구매하고 싶은 물품은 검색해서</p>
              <p>쉽게 찾아보세요</p>
            </div>
          </div>
        </div>
        <div className="section04">
          <div className="wrap-section04">
            <div className="section04-img"></div>
            <div className="goitem04">
              <div className="register">Register</div>
              <div className="content-04">
                <p>판매를 원하는</p>
                <p>상품을 등록하세요</p>
              </div>
              <p>어떤 물건이든 판매하고 싶은 상품을</p>
              <p>쉽게 등록하세요</p>
            </div>
          </div>
        </div>
        <div className="section05">
          <div className="wrap-section05">
            <div className="goitem05">
              <div className="content-05">
                <p>믿을 수 있는</p>
                <p>판다마켓 중고 거래</p>
              </div>
            </div>
            <div className="section05-img"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
