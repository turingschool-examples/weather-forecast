import React, { Component } from 'react';


class App extends Component {

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



  render() {
    return (
			<form>
	          <input type="button" onClick={()=>this.getLocation()} />
	       </form>


    )
  }
}


export default App
