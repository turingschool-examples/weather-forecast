
const PinnedWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PINNED_WEATHER':
      return Object.assign({}, state, action.weatherInfo)
    default:
      return state
  }
}

export default PinnedWeatherReducer;
