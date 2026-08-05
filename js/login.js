const emailInput    = document.getElementById('login-email') ;
const emailError    = document.getElementById('login-emailError');
const passwordInput    = document.getElementById('login-password') ;
const passwordError    = document.getElementById('login-passwordError');

const toggle = document.getElementById('toggle');


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

  }else if(!(emailInput.value.includes('@'))){
    emailInput.classList.add('input-error');
    emailError.style.display = "block";

  }else {
    emailInput.classList.remove('input-error');
    emailError.style.display = "none";
  }
});

//비밀번호
passwordInput.addEventListener('blur', () => {
  if(passwordInput.value.trim()===''){
    passwordInput.classList.add('input-error');

  }else if(passwordInput.value.length<8){
    passwordInput.classList.add('input-error');
    passwordError.style.display = "block";

  }else {
    passwordInput.classList.remove('input-error');
    passwordError.style.display = "none";
  }
});