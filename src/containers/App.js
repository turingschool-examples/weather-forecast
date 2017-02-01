import { connect } from 'react-redux';
import {receiveLocation, addUser} from '../actions'
import App from '../components/App'
import userReducer from "../reducers/user"

const mapStateToProps = state => {
  return {user: state.userReducer};
}

const mapDispatchToProps = dispatch => {

  return {
    fetchLocation: (data)=>{
      dispatch(receiveLocation(data))
    },
    storeUser: (user)=>{
      dispatch(addUser(user))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
