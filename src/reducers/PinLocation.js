const pinLocation = (state = [], action) => {
  switch (action.type) {
    case 'PIN_LOCATION':
      return [...state, {location: action.weatherInfo.data.name}]
    default:
      return state
  }
}

export default pinLocation;
