import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6d9d93b7d32e34850e611e89547fc660";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Weather">
      <form onSubmit={handleSubmit} className="mb-3 navigation">
        <div className="row">
          <div className="col-9">
            <input
              onChange={updateCity}
              type="search"
              placeholder="Type a city.."
              autoComplete="off"
              className="city-input"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="seach-button">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-7">
          <div className="overview">
            <h1>{props.city}</h1>
            <ul>
              <li>Last updated: Friday 19:32</li>
            </ul>
          </div>
        </div>
        <div className="col-5">
          <div className="actual-temperature">
            <strong>{weather.temperature} °C </strong>
            <span className="units">
              <a href="/">°C</a>|<a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="weather-description">
            <img
              src={weather.icon}
              alt={weather.description}
              className="weather-img"
            />
          </div>
        </div>
        <div className="col-5">
          <div className="wind-humidity">
            <h2>{weather.description}</h2>
            <ul>
              <li>{weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3 navigation">
          <div className="row">
            <div className="col-9">
              <input
                onChange={updateCity}
                type="search"
                placeholder="Type a city.."
                autoComplete="off"
                className="city-input"
              />
            </div>
            <div className="col-3">
              <button type="submit" className="seach-button">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-7">
            <div className="overview">
              <h1>{city}</h1>
              <ul>
                <li>Last updated: Friday 19:32</li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="actual-temperature">
              <strong>{Math.round(weather.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a>|<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="weather-description">
              <img
                src={weather.icon}
                alt={weather.description}
                className="weather-img"
              />
            </div>
          </div>
          <div className="col-5">
            <div className="wind-humidity">
              <h2>{weather.description}</h2>
              <ul>
                <li>Humidity:{weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
