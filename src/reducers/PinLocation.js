const pinLocation = (state = [], action) => {
  switch (action.type) {
    case 'PIN_LOCATION':
      return [...state, {location: action.weatherInfo.data.name}]
    case 'DELETE_PINNED_CITY':
      return state.filter((item, index) => index !== action.id)
    default:
      return state
  }
}

export default pinLocation;
