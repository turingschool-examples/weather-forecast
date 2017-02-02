import React, { Component } from 'react';
// import { connect } from 'react-redux';
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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const weatherURL = `http://api.wunderground.com/api/6fc8de6a49f48b06/geolookup/forecast/hourly/forecast10day/conditions/q/${position.coords.latitude},${position.coords.longitude}.json`
      this.getWeather(weatherURL)
      })
    }


    render(){
      return (
        <div>
          <HeaderContainer />
      </div>
      )
    }
  }

export default App;
