function login() {
    const username = document.getElementById('username').value.trim(); // Trim whitespace
    const password = document.getElementById('password').value;

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check against stored credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to home page after successful login
        window.location.href = 'home.html';
    } else {
        // Clear password for security
        document.getElementById('password').value = '';
        document.getElementById('error-message').innerText = 'Invalid username or password!';
    }
}

function register() {
    const username = document.getElementById('username').value.trim(); // Trim whitespace
    const password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Store credentials in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to home page
    window.location.href = 'home.html';
}
