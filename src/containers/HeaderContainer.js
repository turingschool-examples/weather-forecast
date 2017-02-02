import { connect } from 'react-redux';
import {currentWeather} from '../actions'
import Header from '../components/Header'

const mapStateToProps = state => {
  return {
    weather: state.currentWeatherReducer,
  }
}

export default connect(mapStateToProps, null)(Header);
