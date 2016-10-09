import React from 'react';
import currentWeather from '../data/fake-current';

const { temp, humidity, pressure, temp_min: tempMin, temp_max: tempMax } = currentWeather.main;

const FiveDay = () => (
      <div className="fiveDayForecast">
        <h2 className="forecast-title">Extended Forecast for Omaha</h2>
        <ul className="forecast">
          <li>Temp: {temp}</li>
          <li>Humidity: {humidity}</li>
          <li>Pressure: {pressure}</li>
          <li>Min Temp: {tempMin}</li>
          <li>Max Temp: {tempMax}</li>
        </ul>
      </div>
)

export default FiveDay;
