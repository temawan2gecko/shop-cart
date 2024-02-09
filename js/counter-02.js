// Добавление прослушки на все окно
window.addEventListener("click", (event) => {
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
    // Проверяем является ли элемент кнопкой плюс
    if (event.target.dataset.action === "plus") {
      counter.innerText = ++counter.innerText;
    }
    // Проверяем является ли элемент кнопкой минус
    if (event.target.dataset.action === "minus") {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
        event.target.closest('.cart-item').remove();
        toggleCartStatus()
        calcCartPrice()
      }
    }
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      calcCartPrice()
    }
  }
});
