import React from 'react';
import { Link } from 'react-router';

const SettingsForm = ({ names, handleSubmit, handleDelete }) => {
    let input;

    if (names) {
      names = names.map((pins, i) => <div key={i}> {pins.data.current_observation.display_location.full} <button id='deletebtn' onClick={()=> handleDelete(i)}> DELETE </button></div>)
    } else { names = '' }

    return (
      <div className="settings-form">
        <Link to=''> HOME </Link>
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
