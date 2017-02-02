import { combineReducers } from 'redux'
import currentWeatherReducer from './geolocation'
import cityWeatherReducer from './CityReducer'

const rootReducer = combineReducers({
  currentWeatherReducer,
  cityWeatherReducer
})

export default rootReducer
