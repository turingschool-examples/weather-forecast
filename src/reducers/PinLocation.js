const PinnedWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PINNED':
      return [...state, { data: action.weatherInfo }]
    case 'DELETE_PINNED_CITY':
      return state.filter((item, index) => index !== action.id)
    default:
      return state
  }
}

export default PinnedWeatherReducer;
