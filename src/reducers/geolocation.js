const currentWeatherReducer = (state={}, action) => {
  console.log(3)
  switch (action.type){
    case 'CURRENT_WEATHER':
      const weather = {
        temp: action.temp,
        city: action.city,
        currently: action.currently
      }
      return weather
    default:
      return state
    }

}

export default currentWeatherReducer

// json.current_observation.temp_f
// json.current_observation.overcast
