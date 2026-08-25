const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // ==========================================
    // GET VALUES
    // ==========================================
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    // ==========================================
    // CLEAR PREVIOUS MESSAGES
    // ==========================================
    document.getElementById("loginUsernameError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";
    document.getElementById("loginMessage").textContent = "";
    document.getElementById("loginMessage").className = "";

    let valid = true;

    // ==========================================
    // USERNAME VALIDATION
    // ==========================================
    if (username === "") {
        document.getElementById("loginUsernameError").textContent = "Username is required.";
        valid = false;
    }

    // ==========================================
    // PASSWORD VALIDATION
    // ==========================================
    if (password === "") {
        document.getElementById("loginPasswordError").textContent = "Password is required.";
        valid = false;
    }

    // ==========================================
    // LOGIN
    // ==========================================
    if (valid) {
        const correctUsername = "admin";
        const correctPassword = "12345678";

        if (username === correctUsername && password === correctPassword) {
            alert("Login Successful!");
            window.location.href = "../main_dashboard/main_dashboard.html";
        } else {
            document.getElementById("loginMessage").textContent = "Invalid username or password.";
            document.getElementById("loginMessage").className = "login-error";
        }
    }
});

// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================
const toggleLoginPassword = document.getElementById("toggleLoginPassword");
const loginPasswordField = document.getElementById("loginPassword");

toggleLoginPassword.addEventListener("click", function() {
    if (loginPasswordField.type === "password") {
        loginPasswordField.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        loginPasswordField.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});