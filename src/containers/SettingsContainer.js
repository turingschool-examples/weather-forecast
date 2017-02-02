import { connect } from 'react-redux';
import {cityWeather} from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = state => {
  return {
    cityWeather: state.cityWeatherReducer
  }
}

export default connect(mapStateToProps, null)(Settings);
