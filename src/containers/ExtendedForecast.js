import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import FiveDay from './FiveDay';

export default class ExtendedForecast extends Component {
  render() {
    return (
      <section id="ExtendedForecast">
      <FiveDay />
        <h1>Extended Forecast</h1>
        <Link to="/Settings">Go to pinned cities</Link>
        <Link to="/">Go to HomePage</Link>
     </section>
    )
  }
}
