// Get the elements from the document
const cityInput = document.getElementById("city");
const submitButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");

// Define a function to fetch the weather data from an API
const getWeatherData = async (city) => {
    // Use the fetch method to make a request to the API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53984a0563fb3875b9b3a67fb22e5305`);
    // Check if the response is ok
    if (response.ok) {
        // Convert the response to JSON format
        const data = await response.json();
        // Return the data
        return data;
    } else {
        // Throw an error
        throw new Error("Something went wrong");
    }
};

// Define a function to display the weather data on the web page
const displayWeatherData = (data) => {
    // Get the relevant information from the data object
    const name = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Create the HTML elements to display the information
    const nameElement = document.createElement("h2");
    nameElement.textContent = `${name}, ${country}`;

    const tempElement = document.createElement("p");
    tempElement.textContent = `Temperature: ${temp} °C`;

    const feelsLikeElement = document.createElement("p");
    feelsLikeElement.textContent = `Feels like: ${feelsLike} °C`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `Description: ${description}`;

    const iconElement = document.createElement("img");
    iconElement.src = `http://openweathermap.org/img/wn/${icon}.png`;
    iconElement.alt = description;

    // Clear the previous result
    resultDiv.innerHTML = "";

    // Append the elements to the result div
    resultDiv.appendChild(nameElement);
    resultDiv.appendChild(tempElement);
    resultDiv.appendChild(feelsLikeElement);
    resultDiv.appendChild(descriptionElement);
    resultDiv.appendChild(iconElement);
};

// Add an event listener to the submit button
submitButton.addEventListener("click", () => {
    // Get the value of the city input
    const city = cityInput.value;
    // Check if the input is not empty
    if (city) {
        // Call the getWeatherData function with the city as an argument
        getWeatherData(city)
            .then((data) => {
                // Call the displayWeatherData function with the data as an argument
                displayWeatherData(data);
            })
            .catch((error) => {
                // Display the error message on the web page
                resultDiv.innerHTML = `<p>${error.message}</p>`;
            });
    } else {
        // Display a message to enter a city name
        resultDiv.innerHTML = "<p>Please enter a city name</p>";
    }
});
