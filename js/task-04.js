let counterValue = 0;
const value = document.querySelector('#value');

const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

const increment = document.querySelector('[data-action="increment"]');
increment.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})