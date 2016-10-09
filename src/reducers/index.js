import { combineReducers } from 'redux';
import settings from './settings';
import extendedForecast from './extended-forecast';
import fiveday from './fiveday';

const rootReducer = combineReducers({
  settings,
  extendedForecast,
  fiveday
});

export default rootReducer;
