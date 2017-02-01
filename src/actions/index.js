 // const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const currentWeather = (json) => {
  return {
    type: "CURRENT_WEATHER",
    temp: json.current_observation.temp_f
  }
}

export const fetchForecast = options => dispatch => {
  // return fetch API call
};
