import React, { Component } from 'react';
import currentWeather from '../data/fake-current';

export default class FiveDay extends Component {

  render() {
    return (
      <div className="fiveDayForecast">
        <h2 className="forecast-title">Extended Forecast for Omaha</h2>
        <ul className="forecast">
          <li>Temp: {currentWeather.main.temp}</li>
          <li>Humidity: {currentWeather.main.humidity}</li>
          <li>Pressure: {currentWeather.main.pressure}</li>
          <li>Min Temp: {currentWeather.main.temp_min}</li>
          <li>Max Temp: {currentWeather.main.temp_max}</li>
        </ul>
      </div>
    )
  }
}
