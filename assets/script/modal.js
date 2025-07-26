/* Open Modal Dialog */
const formOrder = document.querySelector("#payment-order");

formOrder.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("masuk");
  const modal = document.querySelector(".modal");
  modal.style.visibility = "unset";
});

/* Close Modal if choose Pay later */
const paylaterButton = document.querySelector("#pay-later");

paylaterButton.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.style.visibility = "hidden";
});
