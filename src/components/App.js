import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

<<<<<<< HEAD
export default class App extends Component {
  constructor() {
    super();

  }
=======
const App = () => {
  return (
    <Header />
  )
}
>>>>>>> d1111ed994a156ce7d2fd27419a6b25c602fcd08

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
