import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'
import PinLocation from './PinLocation'
import ExtendedLocalWeatherReducer from './ExtendedLocalWeatherReducer'

const RootReducer = combineReducers({
	LocalWeatherReducer,
	PinnedWeatherReducer,
	PinLocation,
	ExtendedLocalWeatherReducer,
});

export default RootReducer;
