const card_btn = document.querySelectorAll(".card_btn");
console.log(card_btn);

card_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = "Agregado";
    btn.disabled = true;
  });
});
