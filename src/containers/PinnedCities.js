import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class PinnedCities extends Component {
  render() {
    return (
      <section id="PinnedCities">
        <Link to="/ExtendedForecast">Go to Extended Forecast</Link>
        <Link to="/">Go to HomePage</Link>
        <h1>PinnedCities</h1>
        <h3>Boston</h3>
        <h3>Jersey</h3>
        <h3>Denver</h3>
        <input placeholder='Zip Code' className='PinCity' />
        <button children='Pin New City' className='SubmitNewCity' />
      </section>
    )
  }
}
