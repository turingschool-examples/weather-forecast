import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';


export default class App extends Component {


  render() {
    return (
      <section>
        <Link to="/"><h1>Weather Tracker</h1></Link>
        <Link to="/extended-forecast"><nav>Extended Forecast</nav></Link>
        <div>{this.props.children}</div>
      </section>
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
