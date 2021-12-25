const formRef = document.querySelector('.login-form');
let atention = '';

formRef.addEventListener('submit', inputSubmit);

function inputSubmit(event) {
    event.preventDefault();

    const inputElements = event.currentTarget.elements;

    const email = inputElements.email.value;
    const password = inputElements.password.value;

    const formData = {
        email,
        password,
    };

    if (email === '' || password === '') {
        atention = alert('All fields must be filled!');
    }

    if (email && password) {
        console.log(formData);
        formRef.reset();
    }
}