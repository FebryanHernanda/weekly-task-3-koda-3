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

/* Check storageData from storage */
const checkStorage = JSON.parse(localStorage.getItem("userData"));

if (checkStorage) {
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 1000);
}

/* Login Validation */
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get data value from form input
  const emailValue = emailUser.value;
  const passValue = passUser.value;

  let isValid = true;

  if (!emailValue) {
    emailErrorMsg.innerText = "Kolom Email tidak boleh kosong!";
    emailErrorMsg.style.color = "red";
    isValid = false;
    return;
  } else {
    const emailPattern = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailValue)) {
      emailErrorMsg.innerText = "Format email tidak valid!";
      emailErrorMsg.style.color = "red";
      isValid = false;
      return;
    }
  }

  if (!passValue) {
    passErrorMsg.innerText = "Kolom Password tidak boleh kosong!";
    passErrorMsg.style.color = "red";
    isValid = false;
    return;
  }

  //   get data value from localStorage
  const getUser = JSON.parse(localStorage.getItem("userData"));

  if (!getUser) {
    alert("Akun tidak ditemukan! Silahkan daftar terlebih dahulu");
    return;
  }

  const getEmail = getUser.emailValue;
  const getPassword = getUser.passValue;

  if (emailValue !== getEmail) {
    emailErrorMsg.innerText = "Email tidak ditemukan!";
    emailErrorMsg.style.color = "red";
    isValid = false;
  }

  if (passValue !== getPassword) {
    passErrorMsg.innerText = "Password salah!";
    passErrorMsg.style.color = "red";
    isValid = false;
  }

  if (isValid) {
    alert("Login Berhasil!");
    console.log("Login berhasil!");
    console.log(`Email : ${emailValue}`);
    console.log(`Password : ${passValue}`);

    window.location.href = "/index.html";
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
