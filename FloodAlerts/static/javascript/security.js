// script.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const loginBtn = document.getElementById("loginBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");

    loginBtn.addEventListener("click", () => {
        modal.style.display = "block";
        loginForm.classList.remove("hidden");
        signUpForm.classList.add("hidden");
    });

    signUpBtn.addEventListener("click", () => {
        modal.style.display = "block";
        loginForm.classList.add("hidden");
        signUpForm.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submissions
    loginForm.addEventListener("submit", (event) => {
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
                modal.style.display = "none";
            } else {
                alert('Login failed: ' + data.message);
            }
        });
    });

    signUpForm.addEventListener("submit", (event) => {
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
                modal.style.display = "none";
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

