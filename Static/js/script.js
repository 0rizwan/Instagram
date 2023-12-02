let button = document.querySelector('.btn');
let password = document.getElementById('password');
password.addEventListener('input', () => {
    if (password.value.length > 5) {
        button.style.backgroundColor = 'rgb(0, 149, 246)';
        button.removeAttribute('disabled');
    } else {
        button.style.backgroundColor = 'rgb(84, 187, 255)';
        button.setAttribute('disabled', 'disabled');

    }
});