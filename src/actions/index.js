 // const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const currentWeather = (json) => {
  console.log(json)
  return {
    type: "CURRENT_WEATHER",
    city: json.location.city,
    temp: json.current_observation.temp_f,
    currently: json.current_observation.weather,
    extended: json.forecast.simpleforecast.forecastday,
    hourly: json.hourly_forecast
  }
}

export const cityWeather = (json) => {
  return {
    type: "CITY_WEATHER",
    city: json.location.city,
    temp: json.current_observation.temp_f,
    currently: json.current_observation.weather,
    extended: json.forecast.simpleforecast.forecastday,
    hourly: json.hourly_forecast
  }
}

export const sunriseSunset = (json) => {
  return {
    type: "SET_SUNSET",
    sunrise: json.results.sunrise,
    sunset: json.results.sunset
  }
}
