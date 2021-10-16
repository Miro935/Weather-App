let weather = {
  apiKey: "2f61024a0f7301a61b93f744f7df45e0",
  fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        weather.apiKey
      )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return weather.displayWeather(data)
      });
  },
  displayWeather: function (data) {
    const {
      name
    } = data;
    const {
      icon,
      description
    } = data.weather[0];
    const {
      temp,
      humidity,
      pressure
    } = data.main;
    const {
      speed
    } = data.wind;
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".pressure").innerText = "Pressure: " + pressure + " mb";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: () => {
    weather.fetchWeather(document.querySelector(".search-bar").value);
  },
}

document
  .querySelector(".submit-btn")
  .addEventListener("click", function () {
    weather.search();
  });

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Dalat");