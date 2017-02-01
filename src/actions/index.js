 const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveLocation = (data) => {
  return {
    type: "RECIEVE_LOCATION",
    latitude:data.coords.latitude,
    longitude:data.coords.longitude
  };

}

export const fetchForecast = options => dispatch => {
  // return fetch API call
};
