import React from 'react';

const Header = ({ value }) => {
  return(
    <section id="header">
      <p id="current-local-forecast">Current forecast for <span id="city-name">Redux</span></p>
      <p id="view-extended-forecast">Rainy & Sad</p>
    </section>
  )
}

export default Header;
