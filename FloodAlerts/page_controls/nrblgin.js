const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageElement = document.getElementById('message');
const createAccountLink = document.getElementById('create-account');
const resetPasswordLink = document.getElementById('reset-password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Perform login validation here
    if (email === 'youremail@example.com' && password === 'yourpassword') {
        messageElement.textContent = 'Welcome to your number one alert system!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid email or password. Please try again.';
        messageElement.style.color = 'red';
    }

    emailInput.value = '';
    passwordInput.value = '';
});

createAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Implement create account functionality
    alert('Create account functionality goes here.');
});

resetPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Implement reset password functionality
    alert('Reset password functionality goes here.');
});
