export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveForecast = (data) => {
  return {
    type: "SET_LOCAL_WEATHER",
    data:data
  }
};

export const fetchForecast = options => dispatch => {
  // return fetch API call
};
