import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Settings extends Component {
  render() {
    return (
      <section id="Settings">
        <Link to="/ExtendedForecast">Go to Extended Forecast</Link>
        <Link to="/">Go to HomePage</Link>
        <h1>Pinned Cities:</h1>
        <section className='PinnedCities'>
          <h3>{ '❌' } Boston</h3>
          <h3>{ '❌' } Jersey</h3>
          <h3>{ '❌' } Denver</h3>
        </section>
        <section className='InputCityArea'>
          <input placeholder='Zip Code' className='InputPinCity' />
          <button children='Pin New City' className='SubmitNewCity' />
        </section>
      </section>
    )
  }
}
