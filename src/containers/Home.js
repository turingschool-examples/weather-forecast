import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

export default class Home extends Component {

  render() {
    return (
      <div>
      <h1>Home</h1>
      <Link to="/pinned-cities"><h1>+ Pin another city</h1></Link>
      </div>
    )
  }
}
