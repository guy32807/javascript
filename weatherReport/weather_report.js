function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '44e3f40ca54864c03a83a44ea92f3912'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8457;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );