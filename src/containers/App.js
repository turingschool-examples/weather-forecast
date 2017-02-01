import { connect } from 'react-redux';
import {receiveLocation} from '../actions'
import App from '../components/App'

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {

  return {
    fetchLocation: (data)=>{
      dispatch(receiveLocation(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
