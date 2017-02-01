import { connect } from 'react-redux';
import {currentWeather} from '../actions'
import App from '../components/App'

const mapStateToProps = state => {
  return {
    temp: state.currentWeatherReducer
  }
}


const mapDispatchToProps = dispatch => {

  return {
    fetchLocation: (json)=>{
      dispatch(currentWeather(json))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
