import React from 'react';
import { Link } from 'react-router';

const Header = ({ name, temp, desc }) => {
  return(
    <article id='header'>
      <h1 id='title' className='glow'>Weather!</h1>
      { !!name ?
      <section id='current-forecast'>
        The current forecast for {name} is {desc} at {Math.round(temp)}°F
      </section>
      : null }
      <Link to='/forecast'> Extended Forecast </Link>
    </article>
  )
}

export default Header
