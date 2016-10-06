import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Home extends Component {

  render() {
    return (
      <div>
        <section id="HomePage">
          <h1>Home</h1>
          <Link to="/PinnedCities">Pinned Cities</Link>
          <Link to="/ExtendedForecast">Extended Forecast</Link>
        </section>
      </div>
    )
  }
}
