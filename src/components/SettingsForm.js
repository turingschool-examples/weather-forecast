import React from 'react';
import { Link } from 'react-router';

const SettingsForm = ({ names, handleSubmit }) => {
    let input;
    console.log(names);
    return (
      <div>
        <Link to='/'> HOME </Link>
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
        {names}
      </div>
  )}

export default SettingsForm;
