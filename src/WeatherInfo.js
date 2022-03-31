import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                  Last updated:
                  <FormattedDate date={props.data.date} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="actual-temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
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
                <li>
                  Humidity:
                  <span className="humidity">{props.data.humidity}%</span>
                </li>
                <li>
                  Wind:
                  <span className="wind">
                    {Math.round(props.data.wind)}km/h
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
