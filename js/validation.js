
//이메일
export function validateEmail(input, errorEl) {
  if (input.value.trim() === '') {
    input.classList.add('input-error');
    return false;
  }
  if (!input.value.includes('@')) {
    input.classList.add('input-error');
    errorEl.style.display = 'block';
    return false;
  }
  input.classList.remove('input-error');
  errorEl.style.display = 'none';
  return true;
}


//비밀번호
export function validatePassword(input, errorEl){
  if(input.value.trim()===''){
    input.classList.add('input-error');
    return false;

  }else if(input.value.length<8){
    input.classList.add('input-error');
    errorEl.style.display = "block";
    return false;

  }else {
    input.classList.remove('input-error');
    errorEl.style.display = "none";
    return true;
  }

}

//비밀번호 확인
export function validatePasswordConfirm(input, inputConfirm, errorEl){
 if(input.value != inputConfirm.value){
    inputConfirm.classList.add('input-error');
    errorEl.style.display = "block";
    return false;
  }else {
    inputConfirm.classList.remove('input-error');
    errorEl.style.display = "none";
    return true;
  }
}