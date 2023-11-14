// Get the elements from the document
const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

// Define a function to fetch the weather data from an API
function getWeatherData(city) {
    // Use the fetch method to make a request to the API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=53984a0563fb3875b9b3a67fb22e5305`)
    .then(response => response.json()) // Convert the response to JSON format
    .then(data => { // Use the data to display the weather information
        // Get the temperature
