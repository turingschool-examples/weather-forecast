const currentWeatherReducer = (state=null, action) => {
  switch (action.type){
    case 'CURRENT_WEATHER':
      // const currentWeather = {
      //   temp: action.temp,
      //   // weather: action.
      // }
      return action.temp
    default:
      return state
    }

}

export default currentWeatherReducer

// json.current_observation.temp_f
// json.current_observation.overcast
