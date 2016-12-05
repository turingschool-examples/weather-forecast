import { connect } from 'react-redux';
import Forecast from '../components/forecast';

const mapStateToProps = state => {
	const myWeatherObject = state.LocalWeatherReducer
	if (!myWeatherObject) {
    return {}
  }
  return {
    state: state.PinLocation,
		local: state.LocalWeatherReducer
  }
}


export default connect(mapStateToProps)(Forecast);
