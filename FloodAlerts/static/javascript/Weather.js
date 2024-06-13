// Replace YOUR_API_KEY with your actual API key
const API_KEY = 'ba0b66f2792c4207a1c1c304073619c7';
const NAIROBI_CITY_ID = 184742; // City ID for Nairobi

// Function to fetch current weather data
function fetchCurrentWeatherData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${NAIROBI_CITY_ID}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
        });
}

// Function to display current weather data
function displayCurrentWeatherData(data) {
    const currentWeatherContainer = document.getElementById('current-weather');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const precipitation = data.hasOwnProperty('rain') ? data.rain['1h'] || data.rain['3h'] || 0 : 0;
    const cloudiness = data.clouds.all;
    const pressure = data.main.pressure;
    const overview = getWeatherOverview(data.weather[0].id);

    currentWeatherContainer.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Precipitation: ${precipitation} mm/h</p>
        <p>Cloudiness: ${cloudiness}%</p>
        <p>Pressure: ${pressure} hPa</p>
        <p>Overview: ${overview}</p>
    `;
}

// Function to get a human-readable weather overview
function getWeatherOverview(weatherId) {
    const weatherCodes = {
        '200': 'Thunderstorm with light rain',
        '201': 'Thunderstorm with rain',
        '202': 'Thunderstorm with heavy rain',
        // Add more weather codes as needed
        '800': 'Clear sky',
        '801': 'Few clouds',
        '802': 'Scattered clouds',
        '803': 'Broken clouds',
        '804': 'Overcast clouds'
    };

    return weatherCodes[weatherId] || 'Unknown';
}

// Function to fetch forecast weather data
function fetchForecastWeatherData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${NAIROBI_CITY_ID}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayForecastWeatherData(data);
            // Update forecast every 3 hours
            setTimeout(fetchForecastWeatherData, 10800000); // 3 hours in milliseconds
        })
        .catch(error => {
            console.error('Error fetching forecast weather data:', error);
        });
}

// Function to display forecast weather data
function displayForecastWeatherData(data) {
    const forecastWeatherContainer = document.getElementById('forecast-weather');
    const cityName = data.city.name;
    const forecasts = data.list;

    let forecastHTML = `<h2>${cityName} Weather Forecast</h2>`;

    forecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const temperature = forecast.main.temp;
        const description = forecast.weather[0].description;
        const precipitation = forecast.hasOwnProperty('rain') ? forecast.rain['3h'] || 0 : 0;
        const cloudiness = forecast.clouds.all;
        const overview = getWeatherOverview(forecast.weather[0].id);

        forecastHTML += `
            <div>
                <h3>${date.toLocaleString()}</h3>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>Precipitation: ${precipitation} mm/3h</p>
                <p>Cloudiness: ${cloudiness}%</p>
                <p>Overview: ${overview}</p>
            </div>
        `;
    });

    forecastWeatherContainer.innerHTML = forecastHTML;
}

// Call the functions to fetch weather data
fetchCurrentWeatherData();
fetchForecastWeatherData();
