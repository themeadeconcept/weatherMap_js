const newWeather = new Weather();

class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.cloudPercent = document.getElementById("w-cloudPercent");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.innerHTML = `<strong>${weather.name}</strong>`;
    this.desc.innerHTML = `<strong>${weather.weather[0].main}</strong>`;
    this.string.textContent = `${newWeather.convertTemp(weather.main.temp)}°F`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${newWeather.convertTemp(
      weather.main.feels_like
    )}°F`;
    this.cloudPercent.textContent = `Cloud Coverage: ${weather.clouds.all}%`;
    this.wind.textContent = `Wind: ${weather.wind.speed}MPH`;
  }
}
