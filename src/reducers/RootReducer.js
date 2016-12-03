import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'
import PinLocation from './PinLocation'

const RootReducer = combineReducers({
	LocalWeatherReducer,
	PinnedWeatherReducer,
	PinLocation,
});

export default RootReducer;
