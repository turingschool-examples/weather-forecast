import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PinnedWeather from '../components/PinnedWeather';
import { fetchWeatherPinnedLocation } from '../actions/index'


const mapStateToProps = state => {
	if (!state.PinnedWeatherReducer.length) {
    return {
      state: state,
    }
  }
  return {
    state: state.PinnedWeatherReducer,
  }
}

export default connect(mapStateToProps)(PinnedWeather);
