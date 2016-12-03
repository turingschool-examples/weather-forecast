
const PinnedWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PINNED_WEATHER':
      // const { description } = action.weatherInfo.data.weather[0]
      // const { temp } = action.weatherInfo.data.main
      // const { name } = action.weatherInfo.data
      // console.log(description, temp, name)
      return Object.assign({}, state, action.weatherInfo.data)
    default:
      return state
  }
}

export default PinnedWeatherReducer;
