const loginForm = document.querySelector("#login-form");

/* Get Input value */
const emailUser = document.querySelector("#email-login");
const passUser = document.querySelector("#password-login");

/* Get Field for error message */
const emailErrorMsg = document.querySelector(".email-errorMsg");
const passErrorMsg = document.querySelector(".password-errorMsg");

/* Reset Error Message */
emailUser.addEventListener("input", () => {
  emailErrorMsg.textContent = "";
});

passUser.addEventListener("input", () => {
  passErrorMsg.textContent = "";
});

/* Login Validation */
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get data value
  const emailValue = emailUser.value;
  const passValue = passUser.value;

  let isValid = true;

  if (!emailValue) {
    emailErrorMsg.innerText = "Kolom Email tidak boleh kosong!";
    emailErrorMsg.style.color = "red";
    isValid = false;
  }

  if (!passValue) {
    passErrorMsg.innerText = "Kolom Password tidak boleh kosong!";
    passErrorMsg.style.color = "red";
    isValid = false;
  }

  if (isValid) {
    alert("Login Berhasil!");
  }
});

/* Show Password */
const openEye = document.querySelector(".wrapper-eye .eye:first-child");
const closeEye = document.querySelector(".wrapper-eye .eye:last-child");
const inputPass = document.querySelector(".wrapper-eye #password-login");

openEye.addEventListener("click", () => {
  openEye.style.display = "none";
  inputPass.setAttribute("type", "text");
  closeEye.style.display = "block";
});

closeEye.addEventListener("click", () => {
  openEye.style.display = "block";
  inputPass.setAttribute("type", "password");
  closeEye.style.display = "none";
});
