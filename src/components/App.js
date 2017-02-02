import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';
import moment from 'moment';

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
      this.props.fetchLocation(json) })
    .catch((error) => {
      console.log(error)
    })
  }

  getSunrise(sunriseURL){
    fetch(sunriseURL)
    .then((response) => {
      return response.json() })
    .then((json) => {
      this.props.fetchSunriseSunset(json)
    })
  }

  checkDayOrNight(){
    console.log(this.props)
    console.log(moment().format('h:mm:ss a'))
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const weatherURL = `http://api.wunderground.com/api/6fc8de6a49f48b06/geolookup/forecast/hourly/forecast10day/conditions/q/${position.coords.latitude},${position.coords.longitude}.json`

      const sunriseURL = `http://api.sunrise-sunset.org/json?lat=${position.coords.latitude}&lng=${position.coords.longitude}`

      this.getWeather(weatherURL)
      this.getSunrise(sunriseURL)
      this.checkDayOrNight()

      })
    }


    render(){
      return (
        <div>
        HELLO
      {this.props.temp ? <div>{this.props.temp}</div> : <div>LOADING MOTHAFUCKA</div> }
      {this.props.sunrise ? <div>{this.props.sunrise}</div> : <div>oh no</div>}
    </div>
      )
    }
  }

export default App;
