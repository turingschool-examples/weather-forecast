import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';


export default class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

// const mapStateToProps = state => {
//   // return an object of redux store data
//   // that you'd like available in your component
//   return {};
// }
//
// export default connect(mapStateToProps)(App);
