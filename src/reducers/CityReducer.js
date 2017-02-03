const cityWeatherReducer = (state=[], action) => {
  switch (action.type){
    case 'CITY_WEATHER':
    return [...state, {
      city:action.city,
      id: action.id,
      temp:action.temp,
      currently:action.currently,
      hourly:action.hourly,
      extended:action.extended}]
    case 'REMOVE_CITY':
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ]
    default:
      return state
    }

}

export default cityWeatherReducer
