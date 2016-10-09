import React, { Component } from 'react';
// import { Link } from 'react-router';
import currentWeather from '../data/fake-current';

const { temp, humidity, pressure, temp_min: tempMin, temp_max: tempMax } = currentWeather.main;

const FiveDay = () => (
      <div className="fiveDayForecast">
        <ul className="forecast"><h2>Extended Forecast for Omaha</h2>
          <li>Temp: {temp}</li>
          <li>Humidity: {humidity}</li>
          <li>Pressure: {pressure}</li>
          <li>Min Temp: {tempMin}</li>
          <li>Max Temp: {tempMax}</li>
        </ul>
      </div>
)

export default FiveDay;
