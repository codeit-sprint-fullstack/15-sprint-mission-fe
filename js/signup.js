import { validateEmail,validatePassword,validatePasswordConfirm } from "./validation.js"

const emailInput              = document.getElementById('signup-email') ;
const emailError              = document.getElementById('signup-emailError');
const passwordInput           = document.getElementById('signup-password') ;
const passwordError           = document.getElementById('signup-passwordError');
const passwordConfirmInput    = document.getElementById('signup-password-confirm') ;
const passwordConfirmError    = document.getElementById('signup-passwordError-confirm');
const toggle                  = document.getElementById('toggle');
const toggle2                 = document.getElementById('toggle2');
const btnLogin                = document.getElementById('signup-btn');

let emailIsBn = false;
let passwordIsBn = false;
let passwordConfirmIsBn = false;

function updateButtonState(){
    if(emailIsBn&&passwordIsBn&&passwordConfirmIsBn){ 
     btnLogin.classList.add('btn--active');  
  }else{
    btnLogin.classList.remove('btn--active');
  }
}
toggle.addEventListener('change',() => {
  if(toggle.checked === true){
    passwordInput.type = 'text'
  }else{
    passwordInput.type ='password'
  }
});

toggle2.addEventListener('change',() => {
  if(toggle2.checked === true){
    passwordConfirmInput.type = 'text'
  }else{
    passwordConfirmInput.type ='password'
  }
});

//이메일
emailInput.addEventListener('blur', () => {
  emailIsBn = validateEmail(emailInput, emailError);
  updateButtonState();
});

//비밀번호
passwordInput.addEventListener('blur', () => {
  passwordIsBn = validatePassword(passwordInput, passwordError);
  if (passwordConfirmInput.value.trim() !== '') {
    passwordConfirmIsBn = validatePasswordConfirm(passwordInput, passwordConfirmInput, passwordConfirmError);
  }
  updateButtonState();
});


//비밀번호 확인
passwordConfirmInput.addEventListener('blur', () => {
  passwordConfirmIsBn =  validatePasswordConfirm(passwordInput, passwordConfirmInput, passwordConfirmError);
  updateButtonState();
});