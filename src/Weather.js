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
      weatherCondition: response.data.weather[0].main,
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

  if (loaded) {
    return (
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
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
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
              <h1>Barcelona</h1>
              <ul>
                <li>Last updated: Friday 19:32</li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="actual-temperature">
              <strong>16</strong>
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
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/028/128/original/cloud.png?1645860303"
                alt="Cloudy"
                className="weather-img"
              />
            </div>
          </div>
          <div className="col-5">
            <div className="wind-humidity">
              <h2>Cloudy</h2>
              <ul>
                <li>Humidity: 90%{weather.humidity}%</li>
                <li>Wind: 7km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
