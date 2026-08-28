import { useState } from 'react';

const VALIDATORS = {
  name: (value) => {
    if (value.trim() === '') return '상품명을 입력해주세요.';
    if (value.length < 1 || value.length > 10) {
      return '상품명은 1자 이상 10자 이내로 입력해주세요.';
    }
    return '';
  },
  description: (value) => {
    if (value.trim() === '') return '상품 소개를 입력해주세요.';
    if (value.length < 10 || value.length > 100) {
      return '상품 소개는 10자 이상 100자 이내로 입력해주세요.';
    }
    return '';
  },
  price: (value) => {
    if (value === '') return '';
    if (!/^\d+$/.test(value)) {
      return '판매 가격은 숫자로 입력해주세요.';
    }
    return '';
  },
  tag: (value) => {
    if (value.trim() === '') return '';
    if (value.length > 5) {
      return '태그는 5자 이내로 입력해주세요.';
    }
    return '';
  },
};

export default function useProductForm(initialValues = {}) {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    tags: [],
    ...initialValues,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    if (name === 'tags') {
      return values.tags.some((tag) => tag.length > 5)
        ? '태그는 5자 이내로 입력해주세요.'
        : '';
    }
    return VALIDATORS[name] ? VALIDATORS[name](value) : '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

   
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const addTag = (tag) => {
    if (tag.trim() === '') return false;
    if (tag.length > 5) {
      setErrors((prev) => ({ ...prev, tags: '태그는 5자 이내로 입력해주세요.' }));
      return false;
    }
    if (values.tags.includes(tag)) return false;

    setValues((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    setErrors((prev) => ({ ...prev, tags: '' }));
    return true;
  };

  const removeTag = (tag) => {
    setValues((prev) => ({ ...prev, tags: prev.tags.filter((item) => item !== tag) }));
  };

  const isSubmitDisabled =
    values.name.trim() === '' ||
    values.description.trim() === '' ||
    values.price === '' ||
    values.tags.length === 0 ||
    Object.values(errors).some((message) => message !== '');

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    addTag,
    removeTag,
    isSubmitDisabled,
  };
}