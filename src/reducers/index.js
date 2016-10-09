import { combineReducers } from 'redux';
import settings from './settings';
import extendedForecast from './extended-forecast';
import fiveday from './fiveday';
import header from './header';

const rootReducer = combineReducers({
  settings,
  extendedForecast,
  fiveday,
  header
});

export default rootReducer;
