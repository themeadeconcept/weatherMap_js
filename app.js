// Initialize storage
const storage = new Storage();
// Get store location data
const weatherLocation = storage.getLocationData();

//  Initialize the weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Initialize UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Chnage location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Change Location
  weather.changeLocation(city, state);

  // Set Location in Local Storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// Will return a Promise because getWeather is an async function
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
