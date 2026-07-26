const visibilityButtonList = document.querySelectorAll(".visibility-button");

function toggleVisibility(inputElement, imgElement) {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    imgElement.src = "../resources/login/pswd_visibility_on.png";
  } else {
    inputElement.type = "password";
    imgElement.src = "../resources/login/pswd_visibility_off.png";
  }
}

visibilityButtonList.forEach((button) => {
  const img = button.querySelector("img");
  const input = button
    .closest(".password-input")
    .querySelector(".password-input-field");

  button.addEventListener("click", () => {
    toggleVisibility(input, img);
  });
});
