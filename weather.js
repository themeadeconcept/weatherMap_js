class Weather {
  constructor(city, state) {
    this.apiKey = "INSERT YOUR API KEY HERE AND APP WILL WORK";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  convertTemp(temp) {
    const newTemp = 1.8 * (temp - 273) + 32;
    return newTemp.toFixed(0);
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
