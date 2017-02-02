import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HeaderContainer from '../containers/HeaderContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      zip: '',
    }
  }


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

    pinCity(){
      const weatherURL = `http://api.wunderground.com/api/6fc8de6a49f48b06/geolookup/forecast/hourly/forecast10day/conditions/q/${this.state.zip}.json`
      fetch(weatherURL)
      .then((response) => {
        return response.json() })
      .then((json) => {
        debugger;
        console.log(json);
        this.props.getPinned(json) })
      .catch((error) => {
        console.log(error)
      })
    }


    render(){
      return (
        <div>
          <HeaderContainer />
        <input value={this.state.zip} onChange={e => this.setState({zip: e.target.value})} placeholder="zip code" />
      <button onClick={() => this.pinCity()}>Pin New City</button>
          <div>{this.props.cityWeather.city ? <div>city: {this.props.cityWeather.city} Temp: {this.props.cityWeather.temp} Currently: {this.props.cityWeather.currently} </div>: <div>Not a valid zip</div>}</div>
        </div>
      )
    }
  }

export default App;
