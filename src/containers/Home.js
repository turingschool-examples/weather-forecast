import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

export default class Home extends Component {

  goToExtendedForecast(){
    browserHistory.push('/extended-forecast')
  }

  goToPinnedCities(){
    browserHistory.push('/pinned-cities')
  }


  render() {
    return (
      <div>
      <h1>Home</h1>
        <button onClick={() => this.goToExtendedForecast()}>ExtendedForecast</button>

        <button onClick={() => this.goToPinnedCities()}>PinnedCities</button>
      </div>
    )
  }
}
