const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("modalHidden");
});
modal.addEventListener("click", () => {
  modal.classList.add("modalHidden");
});
modalBody.addEventListener("click", (event) => {
  event.stopPropagation();
});
// закритие модального окна по нажатию на клавишу Escape, кнопке асепт, крестик, блюр
