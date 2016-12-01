import React, { Component } from 'react';
import Header from './Header';


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
			<Header />
			{this.props.children}
		</article>
	)
}
}

export default App


// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import axios from 'axios';
//
// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			location: []
// 		}
// 	}
// 	componentDidMount() {
// 		this.getLocation();
// 	}
//
// 	APIcall() {
// 		let latitude = this.state.location[0]
// 		let longitude = this.state.location[1]
//
// 		const weather = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=0fa5f7da0eba0ddb1679162cd1b64e3d`
//
//
// 		axios.get(weather)
// 			.then(function (response){
// 				console.log(response);
// 			})
// 			.catch(function (error){
// 				console.log(error);
// 			})
// 	}
//
// 	showLocation=(position)=> {
// 			 var latitude = position.coords.latitude;
// 			 var longitude = position.coords.longitude;
// 			 this.setState({location: [latitude, longitude]});
// 		}
//
// 	errorHandler=(err)=> {
// 		 if(err.code === 1) {
// 				alert("Error: Access is denied!");
// 		 }
//
// 		 else if( err.code === 2) {
// 				alert("Error: Position is unavailable!");
// 		 }
// 	}
//
// 	getLocation=()=>{
// 		 if(navigator.geolocation){
// 				navigator.geolocation.getCurrentPosition(this.showLocation, this.errorHandler);
// 		 }
// 		 else{
// 				alert("Sorry, browser does not support geolocation!");
// 		 }
// 	 }
//
//   render() {
//
//     return (
//       <div>Hey!
// 				<button onClick={()=>this.APIcall()}> våder </button>
//         <Link to='/'> HOME </Link>
//         <Link to='/dashboard'> DASHBOARD </Link>
//         <Link to='/forecast'> FORECAST </Link>
//         <Link to='/settings'> SETTINGS </Link>
//       </div>
//
//     )
//   }
// }
//
