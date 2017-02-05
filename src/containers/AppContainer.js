import { connect } from 'react-redux';
import {currentWeather, cityWeather, sunriseSunset, changeFeatureCity} from '../actions'
import App from '../components/App'


const mapStateToProps = state => {
  return {
    temp: state.currentWeatherReducer,
    sunrise: state.sunriseSunsetReducer,
    weather: state.currentWeatherReducer,
    cityWeather: state.cityWeatherReducer,
    featureCity: state.changeFeatureCityReducer,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchLocation: (json)=>{
      dispatch(currentWeather(json))
    },
    fetchSunriseSunset: (json)=>{
      dispatch(sunriseSunset(json))
    },
    getPinned: (json)=>{
      dispatch(cityWeather(json))
    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
