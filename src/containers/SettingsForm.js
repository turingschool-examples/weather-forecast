import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { pinLocation } from '../actions/index';
import SettingsForm from '../components/SettingsForm';

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (text) => {
      dispatch(pinLocation(text))
    }
  }
}

export default connect(mapDispatchToProps)(SettingsForm);
