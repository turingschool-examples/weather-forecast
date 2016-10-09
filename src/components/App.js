import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header />
        <div>{this.props.children}</div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps)(App);
