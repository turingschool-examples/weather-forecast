import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PinnedWeather from '../components/PinnedWeather';
import { fetchWeatherPinnedLocation } from '../actions/index'


const mapStateToProps = state => {
	if (!state.PinLocation) {
    return {}
  }
  return {
    names: state.PinLocation
  }
}

export default connect(mapStateToProps)(PinnedWeather);
