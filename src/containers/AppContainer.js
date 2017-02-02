import { connect } from 'react-redux';
import {currentWeather, cityWeather} from '../actions'
import App from '../components/App'

const mapStateToProps = state => {
  return {
    weather: state.currentWeatherReducer,
    cityWeather: state.cityWeatherReducer
  }
}


const mapDispatchToProps = dispatch => {

  return {
    fetchLocation: (json)=>{
      dispatch(currentWeather(json))
    },

      getPinned: (json)=>{
        dispatch(cityWeather(json))
      }
    }
  };


export default connect(mapStateToProps, mapDispatchToProps)(App);
