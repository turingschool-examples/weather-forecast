import { connect } from 'react-redux';
import { fetchWeatherPinnedLocation } from '../actions/index';
import SettingsForm from '../components/SettingsForm';


const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: text => dispatch(fetchWeatherPinnedLocation(text))
  }
}


export default connect(null, mapDispatchToProps)(SettingsForm);
