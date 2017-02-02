import { combineReducers } from 'redux'
import currentWeatherReducer from './geolocation'
import sunriseSunsetReducer from './sunriseSunset'

const rootReducer = combineReducers({
  currentWeatherReducer,
  sunriseSunsetReducer
})

export default rootReducer
