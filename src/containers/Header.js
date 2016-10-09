import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <div className="header-container">
        <h1 className="page-title">Weather Tracker</h1>
        <section id="header">
          <p id="current-local-forecast">Current forecast for <span id="city-name">Denver</span></p>
          <p id="view-extended-forecast">View extended forecast</p>
        </section>
      </div>
    )
  }
}
