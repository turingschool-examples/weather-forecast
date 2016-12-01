import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { fetchWeatherCurrentLocation, pinLocation } from '../actions/index'




const mapStateToProps = state => {
	if (!state.LocalWeatherReducer.name) {
    return {}
  }
  return {
    name: state.LocalWeatherReducer.name,
    temp: state.LocalWeatherReducer.main.temp,
    desc: state.LocalWeatherReducer.weather[0].description,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherCurrentLocation: dispatch,
    handleSubmit: (text) => {
      dispatch(pinLocation(text))
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
