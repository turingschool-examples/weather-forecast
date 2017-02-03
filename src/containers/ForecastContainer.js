import { connect } from 'react-redux';
import {cityWeather} from '../actions'
import Forecast from '../components/Forecast'

const mapStateToProps = state => {
  return {
    cityWeather: state.cityWeatherReducer
  }
}

export default connect(mapStateToProps, null)(Forecast);
