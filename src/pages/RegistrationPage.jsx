import { useState } from "react";
import "../styles/RegistrationPage.css";

function Registration() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  const handle = async (e) => {
    e.preventDefault();

    console.log("등록버튼실패")

    const productData = {
      name,
      description,
      price: Number(price),
      tags: [tag],
    };

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error("상품등록 실패");
      }
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="rg-page">
        <div className="rg-title">
          <h1 className="main-title">상품 등록하기</h1>
          <button className="rg-btn" onClick={handle}>
            등록
          </button>
        </div>
        <div className="rg-main">
          <span className="sub-title">상품명</span>
          <input
            className="input input-a"
            type="text"
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="rg-main">
          <span className="sub-title">상품 소개</span>
          <textarea
            className="input input-b"
            type="text"
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="rg-main">
          <span className="sub-title">판매가격</span>
          <input
            className="input input-c"
            type="text"
            placeholder="상품명을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="rg-main">
          <span className="sub-title">태그</span>
          <input
            className="input input-d"
            type="text"
            placeholder="태그를 입력해주세요"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
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
