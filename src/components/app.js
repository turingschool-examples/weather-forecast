import React, { Component } from 'react';
import Header from './Header';
import SettingsForm from '../containers/SettingsForm';
import PinnedWeather from '../containers/PinnedWeatherContainer';


class App extends Component {
	componentWillMount(){
		this.getCurrentLocation();
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
			<SettingsForm {...this.props}/>
			<PinnedWeather {...this.props}/>
		</article>
	)
}
}

export default App
