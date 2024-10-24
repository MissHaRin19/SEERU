function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('password').value = '';
        showErrorMessage('Invalid username or password!');
    }
}

function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        showErrorMessage('Please enter both username and password.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = 'home.html';
}

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '49d9f553d6c66f032df7cc6b0bbfc8b4';
    const userLocation = localStorage.getItem('userLocation');

    if (userLocation) {
        const locationUpperCase = userLocation.toUpperCase(); // Convert to uppercase
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationUpperCase}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Weather data not available');
                }
                return response.json();
            })
            .then(data => {
                const temp = data.main.temp;
                const weatherDescription = data.weather[0].description;
                document.getElementById('weather').innerHTML = `${locationUpperCase}: ${temp}°C, ${weatherDescription}`;
            })
            .catch(error => {
                document.getElementById('weather').innerHTML = 'Weather data not available';
                console.error(error);
            });
    } else {
        document.getElementById('weather').innerHTML = 'Location not set';
    }
});

