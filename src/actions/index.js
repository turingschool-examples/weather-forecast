export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveForecast = (location, forecastData) => ({
  type: RECEIVE_FORECAST,
  location,
  forecastData
});

export const selectLocation = (location) =>({
  type: SELECT_LOCATION,
  location
});

export const invalidateLocation = (location) => ({
  type: INVALIDATE_LOCATION,
  location
});

export const fetchForecast = options => dispatch => {
  // return fetch API call
};
