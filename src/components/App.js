import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {

  componentDidMount(){
    this.props.fetchLocation()
  }
  render(){
    return (
      <Header />
    )
  }
}
export default App;
