function checkPassword() {
    const password = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    const gate = document.getElementById('password-gate');
    const content = document.getElementById('site-content');

    // Change 'valentine' to whatever password you want!
    if (password.toLowerCase() === 'valentine') {
        gate.style.display = 'none';    // Hide the password box
        content.style.display = 'block'; // Show the quiz
    } else {
        errorMessage.innerText = "Incorrect! Try again ❤️";
    }
}
