const cityWeatherReducer = (state={}, action) => {
  switch (action.type){
    case 'CITY_WEATHER':
      const cityWeather = {
        city: action.city,
        temp: action.temp,
        currently: action.currently
      }
      return cityWeather
    default:
      return state
    }

}

export default cityWeatherReducer

// json.current_observation.temp_f
// json.current_observation.overcast
