const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95da76781dmsh63eeb3d0920aca8p17979ejsnaa8eede0d0a4',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city);
}

const getWeatherData = async (city) => {
  const weatherPromise = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options);
  const weatherData = await weatherPromise.json();
  console.log(weatherData);
  showWeatherData(weatherData);
}

const fToC = (temp) => {
  return ((temp-32)*5/9).toFixed(1);
}

const showWeatherData = (data) => {
  const temp = fToC(data.current_observation.condition.temperature);
  const minTemp = fToC(data.forecasts[0].low);
  const maxTemp = fToC(data.forecasts[0].high);
  
  document.getElementById('city-name').innerText = data.location.city;
  document.getElementById('weather-type').innerText = data.current_observation.condition.text;
  document.getElementById('temp').innerText = temp;
  document.getElementById('min-temp').innerText = minTemp;
  document.getElementById('max-temp').innerText = maxTemp;
}
