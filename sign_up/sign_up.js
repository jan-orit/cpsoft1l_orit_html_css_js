const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // get values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // clear previous message
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // remove previous borders
    document.getElementById("username").classList.remove("error-border","success-border");
    document.getElementById("email").classList.remove("error-border","success-border");
    document.getElementById("password").classList.remove("error-border","success-border");
    document.getElementById("confirmPassword").classList.remove("error-border","success-border");

    let valid = true;

    // username validation
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";

        document.getElementById("username").classList.add("error-border");

        valid = false;
    }

    // email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";

        document.getElementById("email").classList.add("error-border");

        valid = false;
    } else {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email format.";

        valid = false;
        }
    }

    // password validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";

        document.getElementById("password").classList.add("error-border");

        valid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";

        document.getElementById("password").classList.add("error-border");

        valid = false;
    }

    // confirm password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";

        document.getElementById("confirmPassword").classList.add("error-border");

        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";

        document.getElementById("confirmPassword").classList.add("error-border");

        valid = false;
    }

    // Success
    if (valid) {
        alert("Registration successful!");
        form.reset();
    }

    if (valid) {
    alert("Registration successful!");
    window.location.href = "../login/login.html";
    }
})


// show/hide password
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

 togglePassword.addEventListener("click", function () {
     if(passwordField.type === "password") {
        passwordField.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
})

// show/hide confirmpassword
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordField = document.getElementById("confirmPassword");

 toggleConfirmPassword.addEventListener("click", function () {
     if(confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        confirmPasswordField.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
})




