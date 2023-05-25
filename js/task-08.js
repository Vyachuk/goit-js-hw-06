const form = {
    main: document.querySelector('.login-form'),
    email: document.querySelector('[name="email"]'),
    pass: document.querySelector('[name="password"]'),
}


form.main.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.pass.value || !form.email.value) {
        alert('Please write your email and password')
        return;
    }
    const people = {
        email: form.email.value,
        password: form.pass.value,
    }
    console.log(people);

    form.main.reset();
})