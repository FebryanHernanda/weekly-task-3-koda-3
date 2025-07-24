/* Open Humburger menu */

function openMenu() {
  const menuBar = document.querySelector(".open-bars");
  const closeBar = document.querySelector(".close-bars");
  const showMenuBar = document.querySelector(".menu-bars-nav");
  showMenuBar.classList.toggle("show");

  const isOpen = showMenuBar.classList.contains("show");
  menuBar.style.display = isOpen ? "none" : "block";
  closeBar.style.display = isOpen ? "block" : "none";
}

/* Open Profile Menu */

function openMenuLogin() {
  const showLoginBar = document.querySelector(".login-list");
  showLoginBar.classList.toggle("show-2");
}

/* Check Storage Login */
const getUser = JSON.parse(localStorage.getItem("userData"));
const getBarLogin = document.querySelector(".avatar-nav");
const getBarNotLogin = document.querySelector(".not-login");

if (getUser) {
  getBarNotLogin.style.display = "none";
} else {
  getBarNotLogin.style.display = "block";
  getBarLogin.style.display = "none";
}

/* Clear Storage */
const logoutButton = document.querySelectorAll(".logout-button");

logoutButton.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.clear();

    window.location.href = "/index.html";
  });
});
