import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExtendedLocal from '../components/ExtendedComp';
import fetchExtendedLocation from '../actions/index'


const mapStateToProps = state => {
	const myWeatherObject = state.ExtendedReducer
	if (!myWeatherObject.length) {
    return {}
  }
  return {
    name: myWeatherObject[0].data.data.name,
    temp: myWeatherObject[0].data.data.main.temp,
    description: myWeatherObject[0].data.data.weather[0].description,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchExtendedLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedLocal);
