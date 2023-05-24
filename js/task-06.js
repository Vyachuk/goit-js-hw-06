const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
    if(+event.target.dataset.length === event.target.value.length) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
})