import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'
import PinLocation from './PinLocation'
import ExtendedReducer from './ExtendedReducer'

const RootReducer = combineReducers({
	LocalWeatherReducer,
	PinnedWeatherReducer,
	PinLocation,
	ExtendedReducer
});

export default RootReducer;
