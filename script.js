const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');



form.addEventListener('submit', function (e) {
    e.preventDefault();
 
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.borderColor = 'red';
        confirmPassword.style.borderWidth = '2px';
        confirmPassword.insertAdjacentHTML('afterend', '<p style="color: red; font-size: 14px; margin-top: 5px;">Passwords do not match!</p>');
        return;
    }

    const inputs = form.querySelectorAll('input');
    let hasEmptyField = false;

    inputs.forEach(input => {
        if (input.value === '') {
            input.style.borderColor = 'red';
            input.style.borderWidth = '2px';
            hasEmptyField = true;
        }
    });

    if (hasEmptyField) {
        alert('Please fill in all fields!');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});