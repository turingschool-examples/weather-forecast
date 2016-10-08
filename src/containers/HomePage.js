import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Home extends Component {

  render() {
    return (
      <section id="HomePage">
        <h1>Weather Tracker</h1>
        <header className="headerPlaceholder"></header>
        <article className="CityForecast">
          <ul><h2>Current weather for Chicago</h2>
            <li>Temperature: 64&#176; F</li>
            <li>Weather: Partly Cloudy</li>
            <li>Wind: 35mph</li>
            <li>Humidity: 78%</li>
          </ul>
          <h3>View Extended Forecast >></h3>
        </article>
        <article className="CityForecast">
          <ul><h2>Current weather for Maui</h2>
            <li>Temperature: 84&#176; F</li>
            <li>Weather: Sunny</li>
            <li>Wind: 10mph</li>
            <li>Humidity: 25%</li>
          </ul>
          <h3>View Extended Forecast >></h3>
        </article>
        <article className="PinNewCity">

        </article>
        <Link to="/Settings" className="EditCities">Edit Pinned Cities</Link>
      </section>
    )
  }
}

// Below will be in the header
// <Link to="/ExtendedForecast">Extended Forecast</Link>
