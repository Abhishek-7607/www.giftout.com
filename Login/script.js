// Toggle between login and signup forms
function toggleSignup() {
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');

    // Toggle visibility of login and signup forms
    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    }
}

// Validate login form
function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill out both fields!");
        return false;
    }

    // Here, you would typically check the credentials against your database
    alert("Login Successful!");
    return false;  // Prevent form submission
}

// Validate signup form
function validateSignup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill out all fields!");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Here, you would typically send the data to a backend API to create the user
    alert("Signup Successful!");
    return false;  // Prevent form submission
}
