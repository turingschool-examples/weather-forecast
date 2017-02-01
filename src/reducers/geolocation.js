const receiveLocation = (state={}, action) => {
  switch (action.type){
    case 'RECIEVE_LOCATION':
      return action
    default:
      return state
  }
}

export default receiveLocation
