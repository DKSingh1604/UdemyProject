const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=chennai,IND&appid=5fd6d13ff8f199b25a0d232b3c380d97`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const temperatureElement = document.getElementById('temperature');
        const windSpeedElement = document.getElementById('windSpeed');
        const weatherMainElement = document.getElementById('weatherMain');

        // Extracting temperature, wind speed, and weather main from the data
        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const weatherMain = data.weather[0].main;

        // Updating the content of the HTML elements
        temperatureElement.textContent = `Temperature: ${temperature} K`;
        windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;
        weatherMainElement.textContent = `Weather Main: ${weatherMain}`;

        // Print the entire data object to the console for further inspection
        console.log('Weather Data:', data);
    })
    .catch(error => console.error('Error fetching weather data:', error));
