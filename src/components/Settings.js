import React, { Component } from 'react';
import {Link} from 'react-router'
import HeaderContainer from '../containers/HeaderContainer'

class Settings extends Component {
constructor(){
  super()
  this.state = {
    zip: ''
  }
}
render(){
    const cities = this.props.cityWeather.map((city, index)=>{
         return (
           <div className='edit-city'>
             <ul>
               <button onClick={() => this.props.removeClickedCity(index)}>X</button> City: {city.city}
             </ul>
           </div>
         )
       })

    const pinCity = () => {
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

    return(
      <div>
        <HeaderContainer />
        <div className="new-city">
          <input value={this.state.zip}
                 onChange={e => this.setState({zip: e.target.value})}
                 placeholder="zip code"
          />
          <button onClick={() => pinCity()}>
            Pin New City
          </button>
        </div>

        <div className='city-settings'>
          {cities}
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    )}
}
export default Settings
