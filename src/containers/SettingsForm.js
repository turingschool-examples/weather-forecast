import { connect } from 'react-redux';
import { fetchWeatherPinnedLocation, pinLocation } from '../actions/index';
import SettingsForm from '../components/SettingsForm';

const mapStateToProps = state => {
	if (!state.PinLocation) {
    return {}
  }
  return {
    names: state.PinLocation.map((pins) => pins.location)
  }

}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: text => dispatch(fetchWeatherPinnedLocation(text))
      .then(dispatch(pinLocation(text)))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
