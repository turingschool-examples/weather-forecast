import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';


export default class PinnedCities extends Component {
  render() {
    return (
      <section id="PinnedCities">
        <h1>PinnedCities</h1>
        <Link to="/ExtendedForecast">Go to Extended Forecast</Link>
        <Link to="/">Go to HomePage</Link>
      </section>
    )
  }
}
