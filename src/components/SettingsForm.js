import React, { Component } from 'react';

const SettingsForm = ({ handleSubmit }) => {
    let input;
    return (
      <form onSubmit={ (e) => {
        e.preventDefault()
        {handleSubmit}
        console.log(input.value)
      }}>
      <input ref={ node => { input = node }} />
      <button> SUBMIT A CITY, PRETTY PLEASE </button>
    </form>
  )}


export default SettingsForm;
