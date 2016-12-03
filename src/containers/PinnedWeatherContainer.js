import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PinnedWeather from '../components/PinnedWeather';
import { fetchWeatherPinnedLocation } from '../actions/index'


const mapStateToProps = state => {
	if (!state.PinnedWeatherReducer.name) {
    return {}
  }
  return {
    poop: state.PinnedWeatherReducer.name,
    fart: state.PinnedWeatherReducer.main.temp,
    blargh: state.PinnedWeatherReducer.weather[0].description,
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherPinnedLocation}, dispatch)
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PinnedWeather);
