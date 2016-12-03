import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PinnedWeather from '../components/PinnedWeather';
import App from '../components/app';
import { fetchWeatherPinnedLocation } from '../actions/index'


const mapStateToProps = state => {
	if (!state.PinnedWeatherReducer.name) {
    return {}
  }
  return {
    name: state.PinnedWeatherReducer.name,
    temp: state.PinnedWeatherReducer.main.temp,
    description: state.PinnedWeatherReducer.weather[0].description,
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherPinnedLocation}, dispatch)
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PinnedWeather);
