const sunriseSunsetReducer = (state=null, action) => {
  switch (action.type){
    case 'SET_SUNSET':
      return {sunrise: action.sunrise, sunset: action.sunset}
    default:
      return state
    }

}

export default sunriseSunsetReducer
