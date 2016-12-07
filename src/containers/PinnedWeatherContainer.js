import { connect } from 'react-redux';
import PinnedWeather from '../components/PinnedWeather';


const mapStateToProps = state => {
	if (!state.PinLocation.length) {
    return {
      state: state,
    }
  }
  return {
    state: state.PinLocation,
  }
}

export default connect(mapStateToProps)(PinnedWeather);
