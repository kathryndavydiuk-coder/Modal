const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");
const acceptBtn = document.querySelector(".acceptBtn");
const closeIcon = document.querySelector(".material-symbols-outlined");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("modalHidden");
});
// закрытие модального окна по клику на фон
modal.addEventListener("click", () => {
  modal.classList.add("modalHidden");
});
modalBody.addEventListener("click", (event) => {
  event.stopPropagation();
});
// accept
acceptBtn.addEventListener("click", () => {
  modal.classList.add("modalHidden");
});
//esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.classList.contains("modalHidden")) {
      modal.classList.add("modalHidden");
    }
  }
});
// x
closeIcon.addEventListener("click", () => {
  modal.classList.add("modalHidden");
});
