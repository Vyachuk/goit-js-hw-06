function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');
colorDisplay.textContent = '#000000'

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); 
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
})
