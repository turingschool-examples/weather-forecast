import { combineReducers } from 'redux'
import getLocation from './geolocation'
import userReducer from './user'

const rootReducer = combineReducers({
  getLocation,
  userReducer
})

export default rootReducer
