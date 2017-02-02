 // const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const currentWeather = (json) => {
  return {
    type: "CURRENT_WEATHER",
    temp: json.current_observation.temp_f,
    currently: json.current_observation.weather
  }
}

export const fetchForecast = options => dispatch => {
  // return fetch API call
};

export const sunriseSunset = (json) => {
  return {
    type: "SET_SUNSET",
    sunrise: json.results.sunrise,
    sunset: json.results.sunset
  }
}
