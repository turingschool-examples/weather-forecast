require('isomorphic-fetch');
import axios from 'axios';

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const pinLocation = (text) => ({
	type: 'ADD_LOCATION',
	location: text
})

const apiKey = '0fa5f7da0eba0ddb1679162cd1b64e3d';

export const fetchWeatherCurrentLocation = (position) => {
	const latitude = position.coords.latitude;
 	const longitude = position.coords.longitude;

	return (dispatch) => {

		return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}&units=imperial`)
		.then(weather => weather.json())
 		.then((weatherInfo) => {
	 		dispatch({type: 'SET_LOCAL_WEATHER', weatherInfo})
	}
)
}
}

export const fetchWeatherPinnedLocation = (zip) => {
	return (dispatch) => {

		return axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apiKey}&units=imperial`)
			.then((weatherInfo) => dispatch({ type: 'SET_PINNED_WEATHER', weatherInfo }))
		  .catch(error => console.log(error) );
}
}

export const
 fetchExtendedWeatherCurrentLocation = (position) => {
	const latitude = position.coords.latitude;
 	const longitude = position.coords.longitude;
	return dispatch => {
		return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${apiKey}&units=imperial`)
		.then (console.log(dispatch))
 		.then((weatherInfo) => dispatch({type: 'SET_LOCAL_EXTENDED_WEATHER', weatherInfo}))
		.catch(error => console.log(error))
  }
}
