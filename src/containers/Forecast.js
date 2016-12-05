import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Forecast from '../components/forecast';

const mapStateToProps = state => {
	const myWeatherObject = state.PinLocation
	if (!myWeatherObject.length) {
    return {}
  }
  return {
    state: state.PinLocation,
		local: state.LocalWeatherReducer
  }
}


export default connect(mapStateToProps)(Forecast);
