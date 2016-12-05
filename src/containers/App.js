import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherCurrentLocation, fetchWeatherPinnedLocation } from '../actions/index'
import Header from '../containers/Header'

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
				{this.props.children}
			</article>
		)
	}
}

const mapStateToProps = state => {
	if (!state.LocalWeatherReducer.name) {
    return {}
  }
  return {
    name: state.LocalWeatherReducer.current_observation.display_location.full,
    temp: state.LocalWeatherReducer.current_observation.temp_f,
    desc: state.LocalWeatherReducer.current_observation.weather
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherCurrentLocation, fetchWeatherPinnedLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
