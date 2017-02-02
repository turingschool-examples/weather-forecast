import React from 'react';
import { Router, Route } from 'react-router';

import AppContainer from './containers/AppContainer';
import SettingsContainer from './containers/SettingsContainer';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer} />
    <Route path="/settings" component={SettingsContainer} />
  </Router>
);

export default Routes;
