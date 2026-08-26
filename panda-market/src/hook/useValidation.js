export const useValidation = ({ itemName, description, price, tags, tagInput }) => {
  // const validItemname = true;
  // const validDescription = true;
  // const validPrice = true;
  // const validTags = true; -> 이렇게 짜면 하나로 통합해서 관리하기 힘듦

  //에러 객체 생성 & 각 항목 형식 체크
  //값이 숫자인지 판별하는 정규식
  const errors = {};
  const pattern = /^[0-9]+$/;

  if (itemName.length <= 0 || itemName.length > 10) {
    errors.itemName = '상품명은 1자 이상 10자 이내로 작성해주세요';
  }

  if (description.length < 10 || description.length >= 100) {
    errors.description = '상품설명은 10자 이상 100자 이내로 작성해주세요';
  }

  if (!pattern.test(price)) {
    errors.price = '가격은 1자 이상, 숫자여야 합니다.';
  }

  const fiveLetterTag = tags.some((tag) => tag.length > 5);
  if (tagInput.length > 5 || fiveLetterTag) {
    errors.tags = '태그는 5글자 이내로 작성해주세요';
  }
  
  const isOkay =
    Object.keys(errors).length === 0 &&
    itemName &&
    description &&
    price &&
    tags.length > 0;

  return { errors, isOkay };
};
