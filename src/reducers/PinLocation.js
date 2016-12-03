
const pinLocation = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      console.log(action)
      return Object.assign({}, ...state, location: action)
    default:
      return state
  }
}

export default pinLocation;
