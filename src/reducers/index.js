import { combineReducers } from 'redux'
import currentWeatherReducer from './geolocation'

const rootReducer = combineReducers({
  currentWeatherReducer
})

export default rootReducer
