let registeredUser = null;
let registeredPass = null;
let generatedOTP = null;

function registerUser() {
    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;

    if (username && password) {
        registeredUser = username;
        registeredPass = password;
        alert("Registration successful! Please log in.");
        document.getElementById("register-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    } else {
        alert("Please fill in all fields.");
    }
}

function loginUser() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (username === registeredUser && password === registeredPass) {
        generatedOTP = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
        alert("Your OTP is: " + generatedOTP);
        document.getElementById("login-container").style.display = "none";
        document.getElementById("otp-container").style.display = "block";
    } else {
        alert("Invalid username or password.");
    }
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otp-input").value;

    if (parseInt(enteredOTP) === generatedOTP) {
        alert("OTP Verified Successfully!");
        document.getElementById("otp-container").style.display = "none";
        document.getElementById("success-container").style.display = "block";
    } else {
        alert("Incorrect OTP! Access Denied.");
    }
}