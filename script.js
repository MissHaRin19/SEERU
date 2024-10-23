function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored credentials from localStorage (for demo purposes)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check against stored credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to home page after successful login
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password!';
    }
}

// Call this function during registration to store credentials
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store credentials in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to home page
    window.location.href = 'home.html';
}

