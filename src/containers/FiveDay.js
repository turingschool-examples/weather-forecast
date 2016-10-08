import React, { Component } from 'react';
import { Link } from 'react-router';
import currentWeather from '../data/fake-current';

export default class FiveDay extends Component {

  render() {
    return (
      <div id="fiveDayForecast">
        <p id="forecast">
          <h1>Temp: {currentWeather.main.temp}</h1>
          <h1>Humidity: {currentWeather.main.humidity}</h1>
          <h1>Pressure: {currentWeather.main.pressure}</h1>
          <h1>Min Temp: {currentWeather.main.temp_min}</h1>
          <h1>Max Temp: {currentWeather.main.temp_max}</h1>
        </p>

      </div>
    )
  }
}
