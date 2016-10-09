import React, { Component } from 'react';
// import { Link } from 'react-router';
import currentWeather from '../data/fake-current';

export default class FiveDay extends Component {

  render() {
    return (
      <div className="fiveDayForecast">
        <ul className="forecast"><h2>Extended Forecast for Omaha</h2>
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
