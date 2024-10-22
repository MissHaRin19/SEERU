function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Checking hardcoded credentials
    if (username === 'iris' && password === 'seeru') {
        // Redirect to home page after successful login
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password!';
    }
}
