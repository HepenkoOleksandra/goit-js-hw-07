
const form = document.querySelector('.js-login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const userData = {
        email,
        password,
    }

    console.log(userData);

    form.reset();
}




