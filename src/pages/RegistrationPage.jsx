import "../styles/RegistrationPage.css";

function Registration() {
  return (
    <>
      <main className="rg-page">
        <div className="rg-title">
          <h1 className="main-title">상품 등록하기</h1>
          <button className="rg-btn">등록</button>
        </div>
        <div className="rg-main">
          <span className="sub-title">상품명</span>
          <input
            className="input input-a"
            type="text"
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className="rg-main">
          <span className="sub-title">상품 소개</span>
          <textarea
            className="input input-b"
            type="text"
            placeholder="상품 소개를 입력해주세요"
          />
        </div>
        <div className="rg-main">
          <span className="sub-title">판매가격</span>
          <input
            className="input input-c"
            type="text"
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className="rg-main">
          <span className="sub-title">태그</span>
          <input
            className="input input-d"
            type="text"
            placeholder="태그를 입력해주세요"
          />
        </div>
        <div className="tag-list">
          <div className="tag">
            <span>#티셔츠</span>
            <button className="tag-btn" type="button">
              <img src="/image/ic_X.png" alt="태그삭제" />
            </button>
          </div>
          <div className="tag">
            <span>#상의</span>
            <button className="tag-btn" type="button">
              <img src="/image/ic_X.png" alt="태그삭제" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Registration;
