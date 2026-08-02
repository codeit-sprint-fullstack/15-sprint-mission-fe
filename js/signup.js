const emailInput    = document.getElementById('signup-email') ;
const emailError    = document.getElementById('signup-emailError');
const passwordInput    = document.getElementById('signup-password') ;
const passwordError    = document.getElementById('signup-passwordError');


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