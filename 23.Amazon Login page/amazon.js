function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
    }
}
