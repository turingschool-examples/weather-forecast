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
    name: myWeatherObject[0].data.data.name,
    temp: myWeatherObject[0].data.data.main.temp,
    description: myWeatherObject[0].data.data.weather[0].description,
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeatherPinnedLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PinnedWeather);
