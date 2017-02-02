const cityWeatherReducer = (state=[], action) => {
  switch (action.type){
    case 'CITY_WEATHER':
    return [...state, {city:action.city,
      temp:action.temp,
      currently:action.currently,
      hourly:action.hourly,
      extended:action.extended}]
      // const cityWeather =[...state,{
      //   city: action.city,
      //   temp: action.temp,
      //   currently: action.currently
      // }]
      // debugger
      // return cityWeather

    default:
      return state
    }

}

export default cityWeatherReducer

// json.current_observation.temp_f
// json.current_observation.overcast
