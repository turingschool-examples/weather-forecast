import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import FiveDay from './FiveDay';

const extendedForecast = ({ value }) => {
  return (
    <section className="ExtendedForecast">
    <FiveDay />
      <Link to="/Settings">Go to pinned cities</Link>
      <Link to="/">Go to HomePage</Link>
   </section>
  )
}

export default extendedForecast;
