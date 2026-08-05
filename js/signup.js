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
  if(emailInput.value.trim()===''){
    emailInput.classList.add('input-error');
    emailIsBn = false;

  }else if(!(emailInput.value.includes('@'))){
    emailInput.classList.add('input-error');
    emailError.style.display = "block";
    emailIsBn = false;

  }else {
    emailInput.classList.remove('input-error');
    emailError.style.display = "none";
    emailIsBn = true;
  }

  updateButtonState();
});

//비밀번호
passwordInput.addEventListener('blur', () => {
  if(passwordInput.value.trim()===''){
    passwordInput.classList.add('input-error');
    passwordIsBn = false;

  }else if(passwordInput.value.length<8){
    passwordInput.classList.add('input-error');
    passwordError.style.display = "block";
    passwordIsBn = false;

  }else {
    passwordInput.classList.remove('input-error');
    passwordError.style.display = "none";
    passwordIsBn = true;
  }

  updateButtonState();
});


//비밀번호 확인
passwordConfirmInput.addEventListener('blur', () => {
  if(passwordConfirmInput.value.trim()===''){
    passwordConfirmInput.classList.add('input-error');
    passwordConfirmIsBn = false;

  }else if(passwordInput.value != passwordConfirmInput.value){
    passwordConfirmInput.classList.add('input-error');
    passwordConfirmError.style.display = "block";
    passwordConfirmIsBn = false;
  }else {
    passwordConfirmInput.classList.remove('input-error');
    passwordConfirmError.style.display = "none";
    passwordConfirmIsBn = true;
  }

  updateButtonState();
});