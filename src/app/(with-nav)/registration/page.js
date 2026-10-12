"use client";

import styles from "./Registration.module.css";
import Image from "next/image";
import X_icon from "@/assets/icons/ic_X.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { productApi } from "@/components/api/productApi.js";
import useProductValidate from "@/components/hooks/useProductValidate.js";

function Registration() {
  const router = useRouter();
  const {
    validateName,
    validateDescription,
    validatePrice,
    validateTags,
    validErrorName,
    validErrorDescription,
    validErrorPrice,
    validErrorTag,
  } = useProductValidate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const validSubmit =
    !name ||
    validErrorName ||
    !description ||
    validErrorDescription ||
    !price ||
    validErrorPrice ||
    !tags ||
    validErrorTag;

  const submit = async (event) => {
    event.preventDefault();
    const parsedPrice = Number(price);

    if (validSubmit) return;

    const productData = { name, description, price: parsedPrice, tags };

    try {
      const res = await productApi.post(productData);
      res?.id && router.replace(`/items/${res.id}`, { replace: true });
      router.push(`/items/${res.id}`);
    } catch {
      router.push("/ErrorPage");
    }
  };

  const checkName = (e) => {
    const value = e.target.value.trim();
    setName(value);
    validateName(value);
  };

  const checkDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
    validateDescription(value);
  };

  const checkPrice = (e) => {
    setPrice(e.target.value);
    const value = Number(e.target.value.trim());
    validatePrice(value);
  };

  const checkTags = (e) => {
    const value = e.target.value.trim();
    setInput(value);
    const isDuplicate = tags.some((tag) => tag === value);
    validateTags(value, isDuplicate);
  };

  const makeChips = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
    }
    if (e.key === "Enter" && input.trim() && !validErrorTag) {
      setTags((tag) => [...tag, input.trim()]);
      setInput("");
    }
  };

  const handleTagRemove = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <main className={styles.main}>
        <form className={styles.product} onSubmit={(e) => submit(e)}>
          <div className={styles.productHeader}>
            <h1 className={styles.title}>상품 등록하기</h1>
            <button
              type="submit"
              className={`${styles.submit} ${!validSubmit ? styles.submitActive : ""}`}
            >
              등록
            </button>
          </div>

          <div className={styles.name}>
            <label htmlFor="name">상품명</label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="상품명을 입력해주세요"
              value={name}
              onChange={(e) => checkName(e)}
              className={`${validErrorName ? styles.errorInput : ""}`}
            />
            <p
              className={`${validErrorName ? styles.errorMessage : ""} ${styles.errorName}`}
            >
              10자 이내로 입력해주세요
            </p>
          </div>

          <div className={styles.description}>
            <label htmlFor="description">상품 소개</label>
            <input
              name="description"
              type="text"
              id="description"
              placeholder="상품 소개를 입력해주세요"
              value={description}
              onChange={(e) => checkDescription(e)}
              className={`${validErrorDescription ? styles.errorInput : ""}`}
            />
            <p
              className={`${validErrorDescription ? styles.errorMessage : ""} ${styles.errorDescription}`}
            >
              10자 이상 100자 이내로 입력해주세요
            </p>
          </div>

          <div className={styles.price}>
            <label htmlFor="price">판매 가격</label>
            <input
              name="price"
              type="text"
              id="price"
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(e) => checkPrice(e)}
              className={`${validErrorPrice ? styles.errorInput : ""}`}
            />
            <p
              className={`${validErrorPrice ? styles.errorMessage : ""} ${styles.errorPrice}`}
            >
              가격을 입력해주세요
            </p>
          </div>

          <div className={styles.tags}>
            <label htmlFor="tags">태그</label>
            <input
              name="tags"
              type="text"
              id="tags"
              placeholder="태그를 입력해주세요"
              value={input}
              onChange={(e) => checkTags(e)}
              onKeyDown={(e) => makeChips(e)}
              className={`${validErrorTag ? styles.errorInput : ""}`}
            />
            <p
              className={`${validErrorTag ? styles.errorMessage : ""} ${styles.errorTags}`}
            >
              {validErrorTag === "length"
                ? "5자 이내로 입력해주세요"
                : validErrorTag === "duplicate"
                  ? "중복 태그입니다"
                  : ""}
            </p>
            <ul className={styles.tagChip}>
              {tags.map((tag, index) => (
                <li key={tag + index}>
                  <span>#{tag}</span>
                  <button type="button" onClick={() => handleTagRemove(index)}>
                    <Image
                      src={X_icon}
                      alt=""
                      aria-hidden={true}
                      width={22}
                      height={24}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </main>
    </>
  );
}
export default Registration;
