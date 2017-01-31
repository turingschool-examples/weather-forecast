import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class App extends Component {
  constructor() {
    super();

  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }
    render(){
    return (
      <div>Hey!</div>
    )
  }
}
