import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Dashboard extends Component {
  render() {
    return (
      <div>DEY!
        <Link to='/'> HOME </Link>
        <Link to='/dashboard'> DASHBOARD </Link>
        <Link to='/forecast'> FORECAST </Link>
        <Link to='/settings'> SETTINGS </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
