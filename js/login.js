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