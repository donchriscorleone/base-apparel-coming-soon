var form = document.getElementById('form');
var email = document.getElementById('email')
var errorIcon = document.getElementById('error-icon');
var errorMessage = document.getElementById('error-message');


form.addEventListener('submit', (err) => {
    if (!email.value.includes('@')) {
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";

        err.preventDefault();
    }
})

email.addEventListener('keyup', (e) => {
    if (!email.value) {
        errorIcon.style.display = "none";
        errorMessage.style.display = "none";
    }
})