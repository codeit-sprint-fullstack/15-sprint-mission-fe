import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <>
      {/* <header className="top_gdn">
        <div className="logo_gap">
          <a href="index.html">
            <img src="/image/logo.png" alt="판다마켓로고" className="logo" />
          </a>
          <a href="login.html" className="btn_login">
            로그인
          </a>
        </div>
      </header> */}

      {/* 메인배너 */}
      <main className="main_banner">
        <div className="banner_text">
          <h1 className="main_title">
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>
          <a href="/items" className="btn_go">
            구경하러 가기
          </a>
        </div>

        <div className="main_img">
          <img src="/image/Img_home_top.png" alt="판다마켓 메인배너" />
        </div>
      </main>

      <section className="sub">
        {/* 핫아이템 */}
        <div className="sub_back">
          <div className="sub_box">
            <img
              src="/image/Img_home_01.png"
              className="sub_img"
              alt="인기상품"
            />
            <div className="sub_text">
              <span className="sub_tag">Hot item</span>
              <h2 className="sub_title">
                인기 상품을
                <br />
                확인해보세요
              </h2>
              <p className="text">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </div>

        {/* 검색 */}
        <div className="sub_back">
          <div className="sub_box">
            <div className="sub_reverse">
              <img src="/image/Img_home_02.png" alt="상품검색" />
              <div className="sub_text">
                <span className="sub_tag">Search</span>
                <h2 className="sub_title">
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </h2>
                <p className="text">
                  구매하고 싶은 물품을 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 상품등록 */}
        <div className="sub_back">
          <div className="sub_box">
            <img src="/image/Img_home_03.png" alt="상품등록" />
            <div className="sub_text">
              <span className="sub_tag">Register</span>
              <h2 className="sub_title">
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <p className="text">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gray_box"></div>

      {/* 아웃트로 */}
      <div className="bottom">
        <div className="bottom_text">
          <h2 className="main_title">
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
        </div>
        <img
          className="bottom_img"
          src="/image/Img_home_bottom.png"
          alt="하늘배경판다마켓"
        />
      </div>

      {/* 하단바 */}
      {/* <footer className="foot">
        <div className="foot_box">
          <span className="codeit">#codeit - 2024</span>
          <div className="p_q">
            <a href="/privacy">Privacy policy</a>
            <a href="/faq">FAQ</a>
          </div>

          <div className="icon">
            <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
              <img src="/image/gnb/ic_facebook.png" alt="페이스북" />
            </a>
            <a href="https://x.com/?lang=ko" target="_blank">
              <img src="/image/gnb/ic_twitter.png" alt="트위터" />
            </a>
            <a
              href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
              target="_blank"
            >
              <img src="/image/gnb/ic_youtube.png" alt="유튜브" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/image/gnb/ic_instagram.png" alt="인스타그램" />
            </a>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default LandingPage;
