const apiKey = "94250c9d4bf5017bb7c1b05482204f73";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");

async function weatherData(cityName) {
  let response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
