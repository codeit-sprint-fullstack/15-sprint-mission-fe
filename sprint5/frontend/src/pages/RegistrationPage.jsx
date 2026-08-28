import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../api/productApi';
import useProductForm from '../hooks/useProductForm';
import iconX from '../assets/icons/ic_X.svg';
import './RegistrationPage.css';

export default function RegistrationPage() {
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    addTag,
    removeTag,
    isSubmitDisabled,
  } = useProductForm();

  const [tagInput, setTagInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const isTagInputTooLong = tagInput.length > 5;

  const handleTagKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    if (event.nativeEvent.isComposing) return;
    event.preventDefault();
    const added = addTag(tagInput);
    if (added) setTagInput('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting || isSubmitDisabled) return;

    const payload = {
      name: values.name,
      description: values.description,
      price: Number(values.price),
      tags: values.tags,
    };

    try {
      setIsSubmitting(true);
      const product = await createProduct(payload);
      navigate(`/items/${product.id ?? product._id}`);
    } catch (error) {
      alert('상품 등록에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (name) =>
    errors[name]
      ? 'registration__input registration__input--error'
      : 'registration__input';

  return (
    <section className="registration">
      <form className="registration__form" onSubmit={handleSubmit}>
        <div className="registration__header">
          <h2 className="registration__title">상품 등록하기</h2>
          <button
            type="submit"
            className="registration__submit"
            disabled={isSubmitting || isSubmitDisabled}
          >
            등록
          </button>
        </div>

        <label className="registration__field">
          <span className="registration__label">상품명</span>
          <input
            className={inputClassName('name')}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="상품명을 입력해주세요"
          />
          {touched.name && errors.name && (
            <span className="registration__error">{errors.name}</span>
          )}
        </label>

        <label className="registration__field">
          <span className="registration__label">상품 소개</span>
          <textarea
            className={
              errors.description
                ? 'registration__textarea registration__textarea--error'
                : 'registration__textarea'
            }
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="상품 소개를 입력해주세요"
          />
          {touched.description && errors.description && (
            <span className="registration__error">{errors.description}</span>
          )}
        </label>

        <label className="registration__field">
          <span className="registration__label">판매 가격</span>
          <input
            className={inputClassName('price')}
            name="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="판매 가격을 입력해주세요"
            inputMode="numeric"
          />
          {touched.price && errors.price && (
            <span className="registration__error">{errors.price}</span>
          )}
        </label>

        <label className="registration__field">
          <span className="registration__label">태그</span>
          <input
            className={
              isTagInputTooLong
                ? 'registration__input registration__input--error'
                : 'registration__input'
            }
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="태그를 입력 후 Enter를 눌러주세요"
          />
          {isTagInputTooLong && (
            <span className="registration__error">태그는 5자 이내로 입력해주세요.</span>
          )}
          {!isTagInputTooLong && errors.tags && (
            <span className="registration__error">{errors.tags}</span>
          )}
          {values.tags.length > 0 && (
            <div className="registration__tags">
              {values.tags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  className="registration__tag"
                  onClick={() => removeTag(tag)}
                >
                  <span className="registration__tag-hash">#</span>
                  {tag}
                  <img
                    src={iconX}
                    alt="태그 삭제"
                    className="registration__tag-remove"
                  />
                </button>
              ))}
            </div>
          )}
        </label>
      </form>
    </section>
  );
}