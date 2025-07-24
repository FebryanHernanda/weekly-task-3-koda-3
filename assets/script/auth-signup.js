const signUpForm = document.querySelector("#signUp-form");

/* Get Input Value */
const emailUser = document.querySelector("#email");
const passwordUser = document.querySelector("#password");
const termsNConditions = document.querySelector("#agreements");

/* Get Field for error message  */
const emailError = document.querySelector(".email-errorMsg");
const passwordError = document.querySelector(".password-errorMsg");
const termsError = document.querySelector(".terms-errorMsg");

/* reset error message */
emailUser.addEventListener("input", () => {
  emailError.textContent = "";
});

passwordUser.addEventListener("input", () => {
  passwordError.textContent = "";
});

termsNConditions.addEventListener("change", (e) => {
  if (e.target.checked) termsError.textContent = "";
});

/* Check storageData from storage */
const checkStorage = JSON.parse(localStorage.getItem("userData"));

if (checkStorage) {
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 1000);
}

/* Sign Up Form Validation */
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  /* Get Value */
  const emailValue = emailUser.value;
  const passValue = passwordUser.value;
  const termsValue = termsNConditions.checked;

  let isValid = true;

  if (!emailValue) {
    emailError.innerText = "Kolom Email tidak boleh kosong!";
    emailError.style.color = "red";
    isValid = false;
    return;
  } else {
    const emailPattern = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailValue)) {
      emailError.innerText = "Format email tidak valid!";
      emailError.style.color = "red";
      isValid = false;
      return;
    }
  }

  if (!passValue) {
    passwordError.innerText = "Kolom Password tidak boleh kosong!";
    passwordError.style.color = "red";
    isValid = false;
    return;
  } else {
    const passPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passPattern.test(passValue)) {
      passwordError.innerText =
        "Gunakan minimal 8 karakter dengan kombinasi 1 huruf besar, 1 huruf kecil, dan 1 spesial karakter.";
      passwordError.style.color = "red";
      isValid = false;
      return;
    }
  }

  if (!termsValue) {
    termsError.innerText = "Pastikan anda telah menyetujui persyaratan!";
    termsError.style.color = "red";
    isValid = false;
    return;
  }

  const user = {
    emailValue,
    passValue,
  };

  const jsonString = JSON.stringify(user);

  if (isValid) {
    alert("Register dan Login Berhasil!, Autodirect 2 detik");
    console.log("-----form submitted-----");
    console.log(`Email : ${emailValue}`);
    console.log(`Password : ${passValue}`);

    /* Set Data Storage */
    localStorage.setItem("userData", jsonString);

    setTimeout(() => {
      window.location.href = "/index.html";
    }, 2000);
  }
});

/* Show Password */

const openEye = document.querySelector(".wrapper-eye .eye:first-child");
const closeEye = document.querySelector(".wrapper-eye .eye:last-child");
const inputPass = document.querySelector(".wrapper-eye #password");

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
