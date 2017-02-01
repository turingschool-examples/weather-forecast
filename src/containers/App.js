import { connect } from 'react-redux';
import {receiveLocation} from '../actions'
import App from '../components/App'

const mapStateToProps = state => {
  return {
    latitude:state.latitude,
    longitude:state.longitude
  };
}

const mapDispatchToProps = dispatch => {

  return {
    fetchLocation: (data)=>{
      dispatch(receiveLocation(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
