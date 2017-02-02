const cityWeatherReducer = (state=[], action) => {
  switch (action.type){
    case 'CITY_WEATHER':
    return [...state, {city:action.city,
      temp:action.temp,
      currently:action.currently,
      hourly:action.hourly,
      extended:action.extended}]
    default:
      return state
    }

}

export default cityWeatherReducer
