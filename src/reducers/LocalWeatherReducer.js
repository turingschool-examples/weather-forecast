const LocalWeatherReducer = (state={}, action){
  switch (action.type){
    case 'SET_LOCAL_WEATHER':
      console.log("Hello")
    default:
      return state
  }
}

export default LocalWeatherReducer
