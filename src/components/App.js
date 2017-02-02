import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';
import moment from 'moment';
import HeaderContainer from '../containers/HeaderContainer'

class App extends Component {

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
      this.props.fetchSunriseSunset(json)})
    .then(()=>{
      console.log(this.props.sunrise.sunset)
      console.log(moment.utc().format('h:mm:ss a').toUpperCase())
      console.log(this.props.sunrise.sunrise)
    })
  }

  checkDayOrNight(){
    // console.log(this.props.sunrise)
    // console.log(moment.utc().format('h:mm:ss a').toUpperCase())
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

          <HeaderContainer />
          {this.props.sunrise ? <div>{this.props.sunrise.sunset} {this.props.sunrise.sunrise}</div> : <div>oh no</div>}
      </div>
      )
    }
  }

export default App;
