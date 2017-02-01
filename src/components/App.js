import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {

  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((data) => {
       this.props.fetchLocation(data)
      // console.log(data)
    }).then(()=>{
      return this.getWeather()
    })
  }

  getWeather(){
    console.log('pizzarat')
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
