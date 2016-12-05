import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PinnedWeather from '../components/PinnedWeather';
import { fetchWeatherPinnedLocation } from '../actions/index'


const mapStateToProps = state => {
	const myWeatherObject = state.PinnedWeatherReducer
	if (!myWeatherObject.length) {
    return {}
  }
  return {
    current: myWeatherObject.filter((obj) => obj.data),
    extended: myWeatherObject.filter((obj) => obj.extended)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherPinnedLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PinnedWeather);
