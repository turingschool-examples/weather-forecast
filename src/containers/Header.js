import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return(
      <section id="header">
        <p id="current-local-forecast">Current forecast for Denver<span id="city-name">Mikes Butt</span></p>
        <p id="view-extended-forecast">View extended forecast</p>
      </section>
    )
  }
}
