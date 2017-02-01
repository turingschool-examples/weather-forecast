import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {

  // getCurrentLocation(){
  //   navigator.geolocation.getCurrentPosition((data) => {
  //      this.props.fetchLocation(data).then(()=>{
  //        return this.getWeather()
  //      })
  //   })
  // }

  getWeather(weatherURL){
    fetch(weatherURL)
    .then((response) => {
      return response.json() })
    .then((json) => {
      console.log(this.props.fetchLocation)
      this.props.fetchLocation(json) })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const weatherURL = `http://api.wunderground.com/api/6fc8de6a49f48b06/geolookup/forecast/hourly/forecast10day/conditions/q/${position.coords.latitude},${position.coords.longitude}.json`
      this.getWeather(weatherURL)
// json.current_observation.temp_f
// json.current_observation.overcast
      })
    }


    render(){
      return (
        <div>
        HELLO
      {this.props.temp ? <div>{this.props.temp}</div> : <div>LOADING MOTHAFUCKA</div> }
    </div>
      )
    }
  }

export default App;
