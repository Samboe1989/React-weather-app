import React from "react";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Barcelona",
    temperature: 17,
    date: "Friday 19:32",
    description: "Cloudy",
    imgUrl:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/028/128/original/cloud.png?1645860303",
    humidity: 90,
    wind: 8,
    precipitation: 0,
  };
  return (
    <div className="Weather">
      <form className="mb-3 navigation">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              autoComplete="off"
              className="city-input"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="seach-button" />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-7">
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated: {weatherData.date}</li>
            </ul>
          </div>
        </div>
        <div className="col-5">
          <div className="actual-temperature">
            <strong>{weatherData.temperature}</strong>
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
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="weather-img"
            />
          </div>
        </div>
        <div className="col-5">
          <div className="wind-humidity">
            <h2>{weatherData.description}</h2>
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Precipitation: {weatherData.precipitation}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
