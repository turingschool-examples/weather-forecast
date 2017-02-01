 const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveLocation = (data) => {
  const lat = data.coords.latitude
  const long = data.coords.longitude

  return {
    type: "RECIEVE_LOCATION",
    latitude:data.coords.latitude,
    longitude:data.coords.longitude
  };
}

export const fetchForecast = options => dispatch => {
  // return fetch API call
};
