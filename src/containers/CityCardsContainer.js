import { connect } from 'react-redux';
import {cityWeather, changeFeatureCity} from '../actions'
import CityCards from '../components/CityCards'

const mapStateToProps = state => {
  return {
    cityWeather: state.cityWeatherReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFeatureCity: (city)=>{
      dispatch(changeFeatureCity(city))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityCards);
