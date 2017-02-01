import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ""
    }
  }

  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((data) => {
      return this.props.fetchLocation(data)
         console.log(data.coords.latitude, data.coords.longitude);
       })
  }

  componentDidMount(){
    this.getCurrentLocation()
  }
  render(){
    return (
      <div>
      <Header />
      <input placeholder="enter something"
             onChange={e => this.setState({input: e.target.value})}/>
           <button onClick={() => this.props.storeUser(this.state.input)}>Ok</button>
         <p>{this.props.user}</p>
  </div>
    )
  }
}
export default App;
