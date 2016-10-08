import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <section>
      <h1>Weather Tracker</h1>
       <div>{this.props.children}</div>
     </section>
    )
  }
}

const mapStateToProps = state => {

  return {};
}

export default connect(mapStateToProps)(App);
