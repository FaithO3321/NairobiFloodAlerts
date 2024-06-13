// script.js

document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("loginModal");
    const signUpModal = document.getElementById("signUpModal");
    const loginBtn = document.getElementById("loginBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const closeLogin = document.getElementById("closeLogin");
    const closeSignUp = document.getElementById("closeSignUp");

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    signUpBtn.addEventListener("click", () => {
        signUpModal.style.display = "block";
    });

    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    closeSignUp.addEventListener("click", () => {
        signUpModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === signUpModal) {
            signUpModal.style.display = "none";
        }
    });

    // Handle form submissions
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Handle login (send data to server)
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
                loginModal.style.display = "none";
            } else {
                alert('Login failed: ' + data.message);
            }
        });
    });

    document.getElementById("signUpForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("signUpUsername").value;
        const password = document.getElementById("signUpPassword").value;

        // Handle sign up (send data to server)
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Sign up successful!');
                signUpModal.style.display = "none";
            } else {
                alert('Sign up failed: ' + data.message);
            }
        });
    });

    // Social login buttons (these would typically redirect to OAuth flows)
    document.getElementById("facebookLogin").addEventListener("click", () => {
        window.location.href = "/login/facebook";
    });

    document.getElementById("googleLogin").addEventListener("click", () => {
        window.location.href = "/login/google";
    });
});

