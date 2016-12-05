require('isomorphic-fetch');
import axios from 'axios';

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveForecast = (forecastData) => ({
  // action object
});

export const fetchForecast = options => dispatch => {
  // return fetch API call
};

export const fetchWeatherCurrentLocation = (position) => {
	const latitude = position.coords.latitude;
 	const longitude = position.coords.longitude;

	return (dispatch) => {

		return fetch(`https://api.wunderground.com/api/f9433085853dff39/conditions/forecast10day/alerts/hourly10day/q/${latitude},${longitude}.json`)
		.then(weather => weather.json())
 		.then((weatherInfo) => {
	 		dispatch({type: 'SET_LOCAL_WEATHER', weatherInfo})
		})
	}
}

export const fetchWeatherPinnedLocation = ( zip ) => {
  return (dispatch) => {
    return fetch(`https://api.wunderground.com/api/f9433085853dff39/conditions/forecast10day/alerts/hourly10day/q/${zip}.json`)
      .then(weatherInfo => weatherInfo.json())
      .then((weatherInfo) => dispatch({type: 'SET_PINNED', weatherInfo}))
			.catch(error => console.log(error))
  	}
};
