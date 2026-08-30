import { useState } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import styles from "./ProductRegistration.module.css";
import { createProduct } from "../../api/products";
import { useProductValidate } from "../../hooks/useProductValidate";
import deleteIcon from "../../assets/ic_X.svg";
import { useNavigate } from "react-router-dom";

export function ProductRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
    images: [],
  });
  const navigate = useNavigate();
  const [tagInput, setTagInput] = useState("");
  const { errors, isValidate } = useProductValidate(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.nativeEvent.isComposing) return;
      event.preventDefault();
      const value = tagInput.trim();
      if (value === "" || formData.tags.includes(value)) return;
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, value],
      }));
      setTagInput("");
    }
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleSubmit = async (formData) => {
    if (!isValidate) return;
    try {
      await createProduct(formData);
      navigate("/items");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationHeader}>
        <h2>상품 등록하기</h2>
        <button
          className={`${styles.registrationBtn} ${
            isValidate ? styles.active : ""
          }`}
          onClick={() => handleSubmit(formData)}
        >
          등록
        </button>
      </div>

      <FormInput
        label="상품명"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="상품명을 입력해주세요"
        error={errors.name}
      />

      <FormInput
        label="상품 소개 "
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="상품 소개를 입력해주세요"
        multiline
        error={errors.description}
      />

      <FormInput
        label="판매가격"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="판매 가격을 입력해주세요"
        error={errors.price}
      />

      <FormInput
        label="태그"
        name="tags"
        value={tagInput}
        onChange={handleTagInputChange}
        onKeyDown={handleTagKeyDown}
        placeholder="태그를 입력해주세요"
        error={errors.tags}
      />
      <div className={styles.tagList}>
        {formData.tags.map((tag, index) => (
          <span key={index} className={styles.tagChip}>
            # {tag}
            <img
              src={deleteIcon}
              alt="삭제_아이콘"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  tags: prev.tags.filter((_, i) => i !== index),
                }))
              }
            />
          </span>
        ))}
      </div>
    </div>
  );
}
