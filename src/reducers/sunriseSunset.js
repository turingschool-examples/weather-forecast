const sunriseSunsetReducer = (state=null, action) => {
  switch (action.type){
    case 'SET_SUNSET':
      const sunrise = {
        sunrise: action.sunrise,
        sunset: action.sunset
      }
      return sunrise
    default:
      return state
    }

}

export default sunriseSunsetReducer
