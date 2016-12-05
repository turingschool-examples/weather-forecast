import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';
import SettingsForm from '../containers/SettingsForm';
import PinnedWeather from '../containers/PinnedWeatherContainer';
import ExtendedLocal from '../containers/ExtendedLocalContainer'

class App extends Component {
  componentWillMount(){
    this.getCurrentLocation();
  }

  showLocation=(position)=> {
       var latitude = position.coords.latitude;
       var longitude = position.coords.longitude;
       console.log("Latitude : " + latitude + " Longitude: " + longitude);
    }

     errorHandler=(err)=> {
        if(err.code === 1) {
           alert("Error: Access is denied!");
        }

        else if( err.code === 2) {
           alert("Error: Position is unavailable!");
        }
     }

     getLocation=()=>{

        if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(this.showLocation, this.errorHandler);
        }

        else{
           alert("Sorry, browser does not support geolocation!");
        }
     }

   getCurrentLocation(){
     navigator.geolocation.getCurrentPosition((position) => {
       this.props.fetchWeatherCurrentLocation(position)
       this.props.fetchExtendedLocation(position)
     })
   }

 render() {
 	return (
 		<article id='container'>
 			<Header {...this.props}/>
 			<PinnedWeather />
      <ExtendedLocal {...this.props} />
      <Link to='/settings'> SETTINGS </Link>
 		</article>
 	  )
  }
 }

export default App
