import { connect } from 'react-redux';
import {cityWeather} from '../actions'
import Forecast from '../components/Forecast'

const mapStateToProps = state => {
  return {
    cityWeather: state.cityWeatherReducer,
    featureCity: state.changeFeatureCityReducer.featureCity.city
  }
}

export default connect(mapStateToProps, null)(Forecast);
