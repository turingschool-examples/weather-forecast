import { connect } from 'react-redux';
import Header from '../components/Header'
import App from '../components/App'


const mapStateToProps = state => {
  if (!state.LocalWeatherReducer.name) {
    return {}
  }
  return {
    name: state.LocalWeatherReducer.name,
    temp: state.LocalWeatherReducer.main.temp,
    desc: state.LocalWeatherReducer.weather[0].description,
  }

	}
	const mapDispatchToProps = dispatch => {
	  return bindActionCreators({fetchWeatherCurrentLocation}, dispatch)
	  return {};
	}



const Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header
