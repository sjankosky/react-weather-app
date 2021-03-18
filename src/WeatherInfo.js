import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Header">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            {/* <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            /> */}
            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li> Humidity: {props.data.humidity}%</li>
            <li> Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
