import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {
  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
         console.log(position.coords.latitude, position.coords.longitude);
       });
  }
  render(){
    return (
      <Header />
    )
  }

export default App;

