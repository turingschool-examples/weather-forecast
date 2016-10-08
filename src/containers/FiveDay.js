import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FiveDay extends Component {

  render() {
    return (
      <div id="fiveDayForecast">
        <p id="forecast"> 5 day / 3 hour forecast for currently selected city </p>
      </div>
    )
  }
}
