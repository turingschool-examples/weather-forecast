import React from 'react';

const Header = ({ value }) => {
  return(
    <div>
      <h2 className="page-title">Weather Tracker</h2>
      <section id="header">
        <p id="current-local-forecast">Current forecast for <span id="city-name">Denver</span></p>
        <p id="view-extended-forecast">View extended forecast</p>
      </section>
    </div>
  )
}

export default Header;
