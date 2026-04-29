// Select elements
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Event: Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateInputs();
});

// Event: Real-time validation
email.addEventListener("keyup", validateInputs);
password.addEventListener("keyup", validateInputs);

// Main validation function
function validateInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Email Validation
    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Enter a valid email");
    } else {
        setSuccess(email);
    }

    // Password Validation
    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (!isStrongPassword(passwordValue)) {
        setError(password, "Min 8 chars, 1 uppercase, 1 number");
    } else {
        setSuccess(password);
    }
}

// Show error
function setError(input, message) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector(".error");

    small.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

// Show success
function setSuccess(input) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector(".error");

    small.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}

// Email regex
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Strong password regex
function isStrongPassword(password) {
    const re = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
}