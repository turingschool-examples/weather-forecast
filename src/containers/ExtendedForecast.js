import React, { Component } from 'react';
import { Link } from 'react-router';
import FiveDay from './FiveDay';

export default class ExtendedForecast extends Component {
  render() {
    return (
      <section className="ExtendedForecast">
      <FiveDay />
        <Link to="/Settings">Go to pinned cities</Link>
        <Link to="/">Go to HomePage</Link>
     </section>
    )
  }
}
