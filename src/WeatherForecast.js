import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "6d9d93b7d32e34850e611e89547fc660";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <WeatherIcon code="01d" className="WeatherForecast-icon" />
          <div className="WeatherForecast-temperatures">
            <div className="WeatherForecast-temperature-max">Min 19°</div>
            <div className="WeatherForecast-temperature-min">Max 10°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
