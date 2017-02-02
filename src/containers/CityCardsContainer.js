import { connect } from 'react-redux';
import {cityWeather} from '../actions'
import CityCards from '../components/CityCards'

const mapStateToProps = state => {
  return {
    cityWeather: state.cityWeatherReducer
  }
}

export default connect(mapStateToProps, null)(CityCards);
