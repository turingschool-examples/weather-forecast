
const PinnedWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PINNED_WEATHER':
      const { blargh } = action.weatherInfo.data.weather[0]
      const { fart } = action.weatherInfo.data.main
      const { poop } = action.weatherInfo.data
      console.log( blargh , fart, poop)
      return [...state, { data: action.weatherInfo }]
    default:
      return state
  }
}

export default PinnedWeatherReducer;
