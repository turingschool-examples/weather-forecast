import { connect } from 'react-redux';
import {receiveForecast} from '../actions'
import App from '../components/App'

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {

  return {
    fetchLocation: (data)=>{
      dispatch(receiveForecast(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
