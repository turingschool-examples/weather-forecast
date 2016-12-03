import React from 'react';

const SettingsForm = ({ handleSubmit }) => {
    let input;
    return (
      <form onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit(input.value)
      }}>
      <input ref={ node => { input = node }} />
      <button> SUBMIT A CITY, PRETTY PLEASE </button>
    </form>
  )}


export default SettingsForm;
