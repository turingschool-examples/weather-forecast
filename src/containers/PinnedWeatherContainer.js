import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PinnedWeather from '../components/PinnedWeather';
import App from '../components/App';
import { fetchWeatherPinnedLocation } from '../actions/index'


const mapStateToProps = state => {
	const myWeatherObject = state.PinnedWeatherReducer
	console.log(myWeatherObject)
	if (!myWeatherObject.length) {
    return {}
  }
  return {
    name: myWeatherObject[0].data.data.name,
    temp: myWeatherObject[0].data.data.main.temp,
    description: myWeatherObject[0].data.data.weather[0].description,
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherPinnedLocation}, dispatch)
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PinnedWeather);
