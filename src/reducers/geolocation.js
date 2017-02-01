const receiveLocation = (state={}, action) => {
  switch (action.type){
    case 'RECIEVE_LOCATION':
      const location = {
        latitude:action.latitude,
        longitude:action.longitude
      }
      return location
    default:
      return state
  }
}

export default receiveLocation
