import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return(
      <section id="header">
        <p id="current-local-forecast">Current forecast for<span id="city-name">Denver</span></p>
        <p id="view-extended-forecast">View extended forecast</p>
      </section>
    )
  }
}
