import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Forecast from '../components/forecast';

const mapStateToProps = state => {
	const myWeatherObject = state.PinnedWeatherReducer
	if (!myWeatherObject.length) {
    return {}
  }
  return {
    state: myWeatherObject
  }
}


export default connect(mapStateToProps)(Forecast);
