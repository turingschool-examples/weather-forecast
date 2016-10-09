import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';

export default class Home extends Component {

  render() {
    return (
      <section id="HomePage">
        <section className="CityContainer">
          <article className="CityForecast">
            <h2 className="city-name">Current weather for Chicago</h2>
            <ul>
              <li>Temperature: 64&#176; F</li>
              <li>Weather: Partly Cloudy</li>
              <li>Wind: 35mph</li>
              <li>Humidity: 78%</li>
            </ul>
            <h3 className="ViewExtended">View Extended Forecast >></h3>
          </article>
          <article className="CityForecast">
            <ul><h2 className="city-name">Current weather for Maui</h2>
              <li>Temperature: 84&#176; F</li>
              <li>Weather: Sunny</li>
              <li>Wind: 10mph</li>
              <li>Humidity: 25%</li>
            </ul>
            <h3 className="ViewExtended">View Extended Forecast >></h3>
          </article>
          <article className="PinNewCity">
            + Pin another city
          </article>
        </section>
        <p className="EditLink">
          <Link to="/Settings" className="EditCities">Edit Pinned Cities >> </Link>
        </p>
      </section>
    )
  }
}

// Below will be in the header
// <Link to="/ExtendedForecast">Extended Forecast</Link>
