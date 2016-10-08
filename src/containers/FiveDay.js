import React, { Component } from 'react';
// import { Link } from 'react-router';
import currentWeather from '../data/fake-current';

export default class FiveDay extends Component {

  render() {
    return (
      <div class="fiveDayForecast">
        <ul class="forecast">
          <ul>Temp: {currentWeather.main.temp}</ul>
          <ul>Humidity: {currentWeather.main.humidity}</ul>
          <ul>Pressure: {currentWeather.main.pressure}</ul>
          <ul>Min Temp: {currentWeather.main.temp_min}</ul>
          <ul>Max Temp: {currentWeather.main.temp_max}</ul>
        </ul>
      </div>
    )
  }
}
