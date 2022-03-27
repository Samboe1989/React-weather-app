import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="weatherInfo">
        <div className="row">
          <div className="col-sm-7">
            <div className="overview">
              <h1>{props.data.city}</h1>
              <ul>
                <li>
                  Last updated: <FormattedDate date={props.data.date} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-5">
            <span className="actual-temperature">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a>|<a href="/">°F</a>
              </span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <div className="weather-description">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="wind-humidity">
              <h2 className="text-capitalize">{props.data.description}</h2>
              <ul>
                <li>Humidity:{props.data.humidity}%</li>
                <li>Wind:{Math.round(props.data.wind)}km/h</li>
                <li>Min temp:{Math.round(props.data.tempMin)}°C</li>
                <li>Max temp:{Math.round(props.data.tempMax)}°C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
