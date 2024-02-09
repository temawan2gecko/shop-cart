function calcCartPrice() {
  const cartItems = document.querySelectorAll(".cart-item");
  let totalPrice = 0;
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryPrice = document.querySelector(".delivery-cost");
  const deliveryPriceEl = document.querySelector('[data-cart-delivery]')
  cartItems.forEach((item) => {
    const amountEl = item.querySelector("[data-counter]").innerText;
    const priceEl = item.querySelector(".price__currency").innerText;
    const currentPrice = parseInt(amountEl) * parseInt(priceEl);
    totalPrice += currentPrice;
  });
  if (totalPrice > 0) {
    deliveryPriceEl.classList.remove('none')
  } else {
    deliveryPriceEl.classList.add('none')
  }
  if (totalPrice >= 600) {
    deliveryPrice.classList.add("free");
    deliveryPrice.innerText = "Бесплатно";
  } else {
    deliveryPrice.classList.remove("free");
    deliveryPrice.innerText = "250 ₽";
  }

  totalPriceEl.innerText = totalPrice;
}
