import React from 'react';
import { Router, Route } from 'react-router';

import AppContainer from './containers/AppContainer';
import SettingsContainer from './containers/SettingsContainer';
import ForecastContainer from './containers/ForecastContainer';



const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer} />
    <Route path="/settings" component={SettingsContainer} />
    <Route path="/forecast" component={ForecastContainer} />
  </Router>
);

export default Routes;
