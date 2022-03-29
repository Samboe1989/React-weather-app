import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      weatherCondition: response.data.weather[0].main,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "6d9d93b7d32e34850e611e89547fc660";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-2 navigation">
          <div className="row">
            <div className="col-sm-9 searchField">
              <input
                onChange={handleCityChange}
                type="search"
                placeholder="Type a city.."
                autoComplete="off"
                className="city-input"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-3 searchButton">
              <button type="submit" className="seach-button">
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
