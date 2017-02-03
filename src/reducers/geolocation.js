const currentWeatherReducer = (state={}, action) => {
  switch (action.type){
    case 'CURRENT_WEATHER':
      const weather = {
        temp: action.temp,
        city: action.city,
        currently: action.currently,
        extended: action.extended,
        hourly: action.hourly
      }
      return weather
    default:
      return state
    }

}

export default currentWeatherReducer
