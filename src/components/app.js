import React, { Component } from 'react';
import Header from './Header';
import SettingsForm from '../containers/SettingsForm';
import PinnedWeather from '../containers/PinnedWeatherContainer';

class App extends Component {
 	componentWillMount(){
 		this.getCurrentLocation();
 	}

   getCurrentLocation(){
     navigator.geolocation.getCurrentPosition((position) => {
       this.props.fetchWeatherCurrentLocation(position)
     })
   }

 render() {
 	return (
 		<article>
 			<Header {...this.props}/>
 			<SettingsForm {...this.props}/>
 			<PinnedWeather />
 		</article>
 	)
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
  }

  export default App
