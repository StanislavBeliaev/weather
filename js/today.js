let button = document.querySelector(".search__button");
let form = document.querySelector(".search__form");
let searchInput = document.querySelector(".search__input");
let temperature = document.querySelector(".temperature");
let feelsLike = document.querySelector(".temperature__feels");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let wind = document.querySelector(".wind");
let weatherIcon = document.querySelector(".wether__icon")
let desc = document.querySelector(".clouds1")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchInput.value +
      "&appid=2dace3ddd75462430dbb7b25127cf252"
  )
    .then((response) => response.json())
    .then((data) => {
      wind.innerHTML += data.wind.speed + " m/s";
      temperature.innerHTML += data.main.temp + " °F";
      humidity.innerHTML += data.main.humidity + " %";
      feelsLike.innerHTML += data.main.feels_like + " °F";
      pressure.innerHTML += data.main.pressure + " gPa";
      weatherIcon.setAttribute('src',"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" ) ;
      desc.innerHTML += data.weather[0].description;
    })
    .catch((err) => alert("Wrong city name!"));
});
