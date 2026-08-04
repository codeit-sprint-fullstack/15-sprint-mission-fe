// 이메일 유효 검사
// focus out 했을 때 갑싱 없는 경우와 이메일 형식에 맞지 않는 것들을 찾아서 그에 맞는 에러 메시지 보이기

// focus out -> blur
// 1. email 값 가져오기
// 2. 그 email 값으로 validateEmail 진행하기
// 3. 그에 관해서 false면 showError 함수 진행하기
// 4 아니라면 display : none 하는 deleteError 진행하기
// 추가로 작성하면 저 에러 메시지 보이지 않게 하는 것도 작성하기

const email = document.querySelector("#email");
const errorMessage = {
  empty: "이메일을 입력해주세요.",
  invalid: "잘못된 이메일 형식입니다.",
};

function validateEmail(email) {
  // 1. email에 값이 있는가
  // 2. 값이 있으면 본래 email 형식에 맞는가
  // 이걸 다 넘어가면 true
  // 중간에 한 번이라도 걸리면 false
  const emailRegex = /[^\s@]+[^\s@]+\.+[^\s@]/;
  if (email === "") {
    return "empty";
  } else if (!emailRegex.test(email)) {
    return "invalid";
  }
}

function showError(inputElement, message) {
  console.log(message);
}

email.addEventListener("blur", function () {
  const emailValue = email.value;
  const error = validateEmail(email);

  if (error) {
    showError(email, errorMessage[error]);
  }
});
