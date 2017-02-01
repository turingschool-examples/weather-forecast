import React from 'react'

const Header = (props) => {
  props.location ? console.log(props.location.latitude, props.location.longitude) : console.log('No location yet')

  return(
    <div className='header'>
      Current Lat: {props.location.latitude}
      Current Lat: {props.location.longitude}

    </div>
  )
}

// export default Header;
////////////// CONTAINER STUFF BELOW ////////////

import { connect } from 'react-redux';
import {receiveLocation} from '../actions'
// import Header from '../components/Header'

const mapStateToProps = state => {
  return {
    location: state.location,
  };
}

export default connect(mapStateToProps, null)(Header);
