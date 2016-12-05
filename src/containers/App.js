import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app';
import { fetchWeatherCurrentLocation, fetchWeatherPinnedLocation } from '../actions/index'

const mapStateToProps = state => {
	if (!state.LocalWeatherReducer.name) {
    return {}
  }
  return {
    name: state.LocalWeatherReducer.current_observation.display_location.full,
    temp: state.LocalWeatherReducer.current_observation.temp_f,
    desc: state.LocalWeatherReducer.current_observation.weather
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherCurrentLocation, fetchWeatherPinnedLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
