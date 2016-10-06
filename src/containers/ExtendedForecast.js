import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class ExtendedForecast extends Component {
  render() {
    return (
      <section id="ExtendedForecast">
      <h1>Extended Forecast</h1>
      <Link to="/PinnedCities">Go to pinned cities</Link>
      <Link to="/">Go to HomePage</Link>
     </section>
    )
  }
}
