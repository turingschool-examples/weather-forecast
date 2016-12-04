import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app';
import { fetchWeatherCurrentLocation } from '../actions/index'

const mapStateToProps = state => {
	if (!state.LocalWeatherReducer.name) {
    return {}
  }
  return {
    name: state.LocalWeatherReducer.name,
    temp: state.LocalWeatherReducer.main.temp,
    desc: state.LocalWeatherReducer.weather[0].description,
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherCurrentLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
