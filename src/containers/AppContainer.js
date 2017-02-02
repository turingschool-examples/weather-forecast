import { connect } from 'react-redux';
import {currentWeather, cityWeather, sunriseSunset} from '../actions'
import App from '../components/App'


const mapStateToProps = state => {
  console.log(4)
  return {
    temp: state.currentWeatherReducer,
    sunrise: state.sunriseSunsetReducer,
    weather: state.currentWeatherReducer,
    cityWeather: state.cityWeatherReducer
  }
}


const mapDispatchToProps = dispatch => {
console.log(1)
  return {
    fetchLocation: (json)=>{
      dispatch(currentWeather(json))
    },
    fetchSunriseSunset: (json)=>{
      dispatch(sunriseSunset(json))
    },
      getPinned: (json)=>{
        dispatch(cityWeather(json))
      }
    }
  };


export default connect(mapStateToProps, mapDispatchToProps)(App);
