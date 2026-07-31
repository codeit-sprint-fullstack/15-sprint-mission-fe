const emailInput    = document.getElementById('login-email') ;
const emailError    = document.getElementById('login-emailError');

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