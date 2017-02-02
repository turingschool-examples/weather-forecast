import { connect } from 'react-redux';
import {currentWeather, sunriseSunset} from '../actions';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    temp: state.currentWeatherReducer,
    sunrise: state.sunriseSunsetReducer
  }
}


const mapDispatchToProps = dispatch => {

  return {
    fetchLocation: (json)=>{
      dispatch(currentWeather(json))
    },
    fetchSunriseSunset: (json)=>{
      dispatch(sunriseSunset(json))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
