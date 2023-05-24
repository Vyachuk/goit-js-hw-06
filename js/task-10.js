function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let boxSize = 30;
const boxField = document.querySelector('#boxes');
const createBox = document.querySelector('[data-create]');
const destroyBox = document.querySelector('[data-destroy]');
const boxCount = document.querySelector('[data-count]')

createBox.addEventListener('click', () => {
  createBoxes(boxCount.value);
})

destroyBox.addEventListener('click', () => {
  boxField.innerHTML = '';
  boxSize = 30;
})

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    boxes.push(`<div style="background-color: ${getRandomHexColor()}; width:${boxSize}px; height:${boxSize}px"></div>`);
    boxSize += 10;
  }
  boxField.insertAdjacentHTML('beforeend', boxes.join(''));
}

