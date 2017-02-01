import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {

  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((data) => {
      return this.props.fetchLocation(data)
         console.log(data.coords.latitude, data.coords.longitude);
       })
  }

  componentDidMount(){
    this.getCurrentLocation()
  }
  render(){
    return (
      <Header />
    )
  }
}
export default App;
