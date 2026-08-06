import { validateEmail,validatePassword } from "./validation.js" 

const emailInput      = document.getElementById('login-email') ;
const emailError      = document.getElementById('login-emailError');
const passwordInput   = document.getElementById('login-password') ;
const passwordError   = document.getElementById('login-passwordError');
const toggle          = document.getElementById('toggle');
const btnLogin       = document.getElementById('login-btn');

let emailIsBn = false;
let passwordIsBn = false;

function updateButtonState(){
    if(emailIsBn&&passwordIsBn){ 
     btnLogin.classList.add('btn--active');  
  }else{
    btnLogin.classList.remove('btn--active');
  }
}
//비밀번호 토글
toggle.addEventListener('change',() => { 
  if(toggle.checked === true){
    passwordInput.type = 'text'
  }else{
    passwordInput.type ='password'
  }
});

//이메일
emailInput.addEventListener('blur', () => {
  emailIsBn = validateEmail(emailInput,emailError);
  updateButtonState();
});

//비밀번호
passwordInput.addEventListener('blur', () => {
  passwordIsBn = validatePassword(passwordInput,passwordError);
  updateButtonState();
});