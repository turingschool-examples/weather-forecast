const LocalWeatherReducer = (state={}, action) => {
  switch (action.type){
    case 'SET_LOCAL_WEATHER':
    debugger
      return console.log(action)
    default:
      return state
  }
}

export default LocalWeatherReducer
