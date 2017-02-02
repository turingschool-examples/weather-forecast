import { combineReducers } from 'redux'
import currentWeatherReducer from './geolocation'
import sunriseSunsetReducer from './sunriseSunset'

import cityWeatherReducer from './CityReducer'

const rootReducer = combineReducers({
  currentWeatherReducer,
  cityWeatherReducer,
  sunriseSunsetReducer
})

export default rootReducer
