export function useProductValidate(formData) {
  const errors = {};

  if (formData.name.trim().length < 1) {
    errors.name = "상품명을 입력해주세요.";
  } else if (formData.name.trim().length > 10) {
    errors.name = "상품명을 10자 이내로 입력해주세요.";
  }
  if (formData.description.trim().length < 10) {
    errors.description = "상품 소개는 10자 이상 입력해주세요.";
  } else if (formData.description.trim().length > 100) {
    errors.description = "상품 소개는 100자 이내로 입력해주세요.";
  }

  if (formData.price === "" || isNaN(Number(formData.price))) {
    errors.price = "판매 가격은 숫자로 입력해주세요.";
  }

  if (formData.tags.some((tag) => tag.length > 5)) {
    errors.tags = "태그는 각각 5글자 이내로 입력해주세요.";
  }

  const isValidate = Object.keys(errors).length === 0;

  return { errors, isValidate };
}
