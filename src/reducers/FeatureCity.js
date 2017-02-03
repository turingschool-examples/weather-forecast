const changeFeatureCityReducer = (state=[], action) => {
  switch (action.type){
    case 'CHANGE_CITY':
      return {featureCity: action}
    default:
      return state
    }
}

export default changeFeatureCityReducer
