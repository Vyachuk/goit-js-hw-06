const greet = document.querySelector('#name-output');

const yourName = document.querySelector('#name-input');
yourName.addEventListener('input', (event) => {
    event.target.value ? greet.textContent = event.target.value : greet.textContent = 'Anonymous'
})