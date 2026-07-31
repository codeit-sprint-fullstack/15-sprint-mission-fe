const emailInput = document.querySelector("#signup-email");
const emailErorrComponent = document.querySelector(".email.error");
const passwordInput = document.querySelector("#signup-passwd");
const passwordErrorComponet = document.querySelector(".passwd.error");
const passwordInput2 = document.querySelector("#signup-passwd2");
const passwordErrorComponet2 = document.querySelector(".passwd2.error");
const totalInput = document.querySelector("form");
let passwordCompar = "";

//이벤트 위임 테스트 코드(미션 진행중 중단됨)
console.log(totalInput);
totalInput.addEventListener("focusin", (event) => {
  console.log(event.target.closest("input").value);
});

console.log(passwordInput);
function vaildateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function vaildatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  return true;
}

emailInput.addEventListener("blur", (event) => {
  const value = event.target.value;
  console.log(value);
  if (!value) {
    console.log("이메일 미입력");
    emailErorrComponent.children[0].textContent = "이메일을 입력해주세요.";
    emailInput.style.border = "1px solid var(--error-red, #F74747)";
    emailErorrComponent.style.display = "block";
  } else if (!vaildateEmail(value)) {
    console.log("이메일 비정상");
    emailErorrComponent.children[0].textContent = "잘못된 이메일 형식입니다.";
    emailInput.style.border = "1px solid var(--error-red, #F74747)";
    emailErorrComponent.style.display = "block";
  } else {
    console.log("이메일 정상");
    emailErorrComponent.style.display = "none";
    emailInput.style.border = "none";
  }
});

passwordInput.addEventListener("blur", (event) => {
  const value = event.target.value;
  console.log(value);
  if (!value) {
    console.log("비밀번호 미입력");
    passwordErrorComponet.children[0].textContent = "비밀번호를 입력해주세요.";
    passwordInput.style.border = "1px solid var(--error-red, #F74747)";
    passwordErrorComponet.style.display = "block";
  } else if (!vaildatePassword(value)) {
    console.log("비밀번호 짧음");
    passwordErrorComponet.children[0].textContent =
      "비밀번호를 8자리 이상 입력해주세요.";
    passwordInput.style.border = "1px solid var(--error-red, #F74747)";
    passwordErrorComponet.style.display = "block";
  } else {
    console.log("비밀번호 정상");
    passwordErrorComponet.style.display = "none";
    passwordInput.style.border = "none";
  }
  passwordCompar = value;
});

passwordInput2.addEventListener("blur", (event) => {
  const value = event.target.value;
  console.log(value);
  if (!value) {
    console.log("비밀번호 미입력");
    passwordErrorComponet2.children[0].textContent = "비밀번호를 입력해주세요.";
    passwordInput2.style.border = "1px solid var(--error-red, #F74747)";
    passwordErrorComponet2.style.display = "block";
  } else if (!vaildatePassword(value)) {
    console.log("비밀번호 짧음");
    passwordErrorComponet2.children[0].textContent =
      "비밀번호를 8자리 이상 입력해주세요.";
    passwordInput2.style.border = "1px solid var(--error-red, #F74747)";
    passwordErrorComponet2.style.display = "block";
  } else if (value !== passwordCompar) {
    console.log("비밀번호 미일치");
    passwordErrorComponet2.children[0].textContent =
      "비밀번호가 서로 일치하지 않습니다.";
    passwordInput2.style.border = "1px solid var(--error-red, #F74747)";
    passwordErrorComponet2.style.display = "block";
  } else {
    console.log("비밀번호 정상");
    passwordErrorComponet2.style.display = "none";
    passwordInput2.style.border = "none";
  }
});
