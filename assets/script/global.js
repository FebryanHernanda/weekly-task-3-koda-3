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
