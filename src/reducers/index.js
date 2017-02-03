import { combineReducers } from 'redux'
import currentWeatherReducer from './geolocation'
import sunriseSunsetReducer from './sunriseSunset'
import changeFeatureCityReducer from './FeatureCity'
import cityWeatherReducer from './CityReducer'

const rootReducer = combineReducers({
  currentWeatherReducer,
  cityWeatherReducer,
  sunriseSunsetReducer,
  changeFeatureCityReducer
})

export default rootReducer
