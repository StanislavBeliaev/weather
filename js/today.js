export let button = document.querySelector(".search__button");
export let form = document.querySelector(".search__form");
export let searchInput = document.querySelector(".search__input");
export let temperature = document.querySelector(".temperature");
export let feelsLike = document.querySelector(".temperature__feels");
export let humidity = document.querySelector(".humidity");
export let pressure = document.querySelector(".pressure");
export let wind = document.querySelector(".wind");
export let weatherIcon = document.querySelector(".wether__icon")
export let desc = document.querySelector(".clouds1")
export let weatherIn = document.querySelector(".main__weather")

function  toTextualDescription(deg){
  if(deg>292.5) return 'North Westerly';
  if(deg>337.5) return 'Northerly';
  if(deg>247.5) return 'Westerly';
  if(deg>202.5) return 'South Westerly';
  if(deg>157.5) return 'Southerly';
  if(deg>122.5) return 'South Easterly';
  if(deg>67.5) return 'Easterly';
  if(deg>22.5){return 'North Easterly';}
  return 'Northerly';
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchInput.value +
      "&appid=2dace3ddd75462430dbb7b25127cf252"
  )
    .then((response) => response.json())
    .then((data) => {
      wind.innerHTML = data.wind.speed + " m/s" +"," +toTextualDescription(data.wind.deg);
      temperature.innerHTML = data.main.temp + " °F";
      humidity.innerHTML = data.main.humidity + " %";
      feelsLike.innerHTML = data.main.feels_like + " °F";
      pressure.innerHTML = data.main.pressure + " gPa";
      weatherIcon.setAttribute('src',"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png" ) ;
      desc.innerHTML = data.weather[0].description;
      weatherIn.innerHTML = ("Weather In")+ " "+searchInput.value
    })
    .catch((err) => alert("Wrong city name!"));
});

