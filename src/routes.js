import React from 'react';
import { Router, Route } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import PinnedWeather from './components/PinnedWeather';
import SettingsForm from './containers/SettingsForm';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path='forecast' component={PinnedWeather}/>
    <Route path='settings' component={SettingsForm}/>
    <Route path='dashboard' component={Dashboard}/>
  </Router>
);

export default Routes;
