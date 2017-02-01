import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {

  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((data) => {
      return this.props.fetchLocation(data)
       })
  }

  componentDidMount(){
    this.getCurrentLocation()
  }
  render(){
    return (
      <div>
      <Header />
      </div>
    )
  }
}
export default App;
