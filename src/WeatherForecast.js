import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <WeatherIcon code="01d" />
          <div className="WeatherForecast-temperatures">
            <div className="WeatherForecast-temperature-max">Min 19°</div>
            <div className="WeatherForecast-temperature-min">Max 10°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
