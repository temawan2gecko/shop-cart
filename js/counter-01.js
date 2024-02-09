// Находим элементы на страницу
const plusButton = document.querySelector('[data-action="plus"]');
const minusButton = document.querySelector('[data-action="minus"]');
const counter = document.querySelector('[data-counter]');


// Отслеживаем клик на кнопку минус
minusButton.addEventListener('click', () => {


    // Проверяем, чтобы счетчик был больше, чем 1
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
});

// Отслеживаем клик на кнопку плюс
plusButton.addEventListener('click', () => {
    counter.innerText = ++counter.innerText;
})



