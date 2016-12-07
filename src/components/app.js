import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCurrentLocationWeather, fetchPinnedLocationWeather } from '../actions/index'
import Header from '../containers/Header'
import Dashboard from '../containers/Dashboard'
import ExtendedLocal from '../containers/ExtendedLocalContainer'
import { Link } from 'react-router';
import PinnedWeather from '../components/PinnedWeather'

class App extends Component {
  componentWillMount() {
    this.getCurrentLocation()
  }

  getCurrentLocation(){
       navigator.geolocation.getCurrentPosition((position) => {
         this.props.fetchWeatherCurrentLocation(position)
       })
     }

  render() {
    return (
      <article>
        <Header {...this.props}/>
        <Link to='/settings'> SETTINGS </Link>
        <PinnedWeather {...this.props}/>
        {this.props.children}
      </article>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCurrentLocationWeather, fetchPinnedLocationWeather }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
