import { connect } from 'react-redux';
import { fetchWeatherPinnedLocation, pinLocation } from '../actions/index';
import SettingsForm from '../components/SettingsForm';

const mapStateToProps = state => {
	if (!state.PinLocation) {
    return {}
  }
  return {
    names: state.PinLocation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: text => dispatch(fetchWeatherPinnedLocation(text)),
    handleDelete: (id) => {
        dispatch({
          type: 'DELETE_PINNED_CITY',
          id,
      })
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
