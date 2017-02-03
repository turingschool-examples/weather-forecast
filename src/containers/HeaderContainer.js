import { connect } from 'react-redux';
import {currentWeather, changeFeatureCity} from '../actions'
import Header from '../components/Header'

const mapStateToProps = state => {
  return {
    weather: state.currentWeatherReducer,
  }
}

const mapDispatchToProps = dispatch => {
 return {
   changeFeatureCity: (city)=>{
     dispatch(changeFeatureCity(city))
   }
 }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
