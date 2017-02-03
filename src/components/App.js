import React, { Component } from 'react';
import Header from './Header';
import {Link} from 'react-router'
import moment from 'moment-timezone';
import HeaderContainer from '../containers/HeaderContainer'
import CityCardsContainer from '../containers/CityCardsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      zip: '',
      pressed: [],
      secretCode: [38,38,40,40,37,39,37,39,66,65],
      newman: false,
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

  getSunrise(sunriseURL){
    fetch(sunriseURL)
    .then((response) => {
      return response.json() })
    .then((json) => {
      this.props.fetchSunriseSunset(json)})
    .then(()=>{
      let sunrise = moment.parseZone(`${this.props.sunrise.sunrise}`).local().format('HH:mm:ss')
      let now = moment().format('HH:mm:ss')
      let sunset = moment.parseZone(`${this.props.sunrise.sunset}`).local().format('HH:mm:ss')
      if (now > sunrise && now < sunset){console.log("it's fuckin' daytime baby!")}
      else (console.log("it's night now. time to shine."))
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const weatherURL = `http://api.wunderground.com/api/6fc8de6a49f48b06/geolookup/forecast/hourly/forecast10day/conditions/q/${position.coords.latitude},${position.coords.longitude}.json`
      const sunriseURL = `http://api.sunrise-sunset.org/json?lat=${position.coords.latitude}&lng=${position.coords.longitude}&formatted=0`
      this.getWeather(weatherURL)
      this.getSunrise(sunriseURL)
      })
    }

    pinCity(){
      const weatherURL = `http://api.wunderground.com/api/6fc8de6a49f48b06/geolookup/forecast/hourly/forecast10day/conditions/q/${this.state.zip}.json`
      fetch(weatherURL)
      .then((response) => {
        return response.json() })
      .then((json) => {
        this.props.getPinned(json) })
      .catch((error) => {
        console.log(error)
      })
      if(this.props.cityWeather.length >= 3){
        this.props.cityWeather.shift()
      }
    }

    konami(e){
      let newArray = this.state.pressed;
      newArray.push(e.keyCode)
      newArray.splice(-this.state.secretCode.length -1, newArray.length - this.state.secretCode.length)
      if(newArray.toString() === this.state.secretCode.toString()){
        this.setState({newman: !this.state.newman})
      }
      this.setState({pushed: newArray});
      console.log(this.state.pushed, this.state.secretCode)
    }

    render(){
      return (
        <div tabIndex="0" onKeyUp={(e)=>this.konami(e)}>
          {this.state.newman ? <img src="https://media.giphy.com/media/uOAXDA7ZeJJzW/giphy.gif"/> : null}
          <HeaderContainer />
          <input value={this.state.zip} onChange={e => this.setState({zip: e.target.value})} placeholder="zip code" />
          <button onClick={() => this.pinCity()}>Pin New City</button>
            <CityCardsContainer />
          <Link to="/settings">Edit Pinned Cities >> </Link>
        </div>
      )
    }
  }

export default App;
