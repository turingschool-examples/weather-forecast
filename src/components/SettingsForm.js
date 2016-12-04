import React from 'react';

const SettingsForm = ({ handleSubmit }) => {
    let input;

    return (
      <form
        id='input-container'
        onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit(input.value)
      }}>
        <input
          type='number'
          id='zip-input'
          ref={ node => { input = node }} />
        <button
          id='submitbtn'> Enter a Zipcode
        </button>
      </form>
  )}

export default SettingsForm;
