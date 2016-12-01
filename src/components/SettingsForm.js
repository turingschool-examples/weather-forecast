import React, { Component } from 'react';


class SettingsForm extends Component {
  render () {
    let input;
    return (
      <form onSubmit={ (e) => {
        e.preventDefault()
        this.props.handleSubmit(input.value)
      }}>
      <input ref={ node => { input = node }} />
      <button> SUBMIT A CITY, PRETTY PLEASE </button>
    </form>
  )}
}

export default SettingsForm;
