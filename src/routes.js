import React from 'react';
import { Router, Route } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Forecast from './containers/Forecast';
import Settings from './containers/Settings';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path='forecast' component={Forecast}/>
    <Route path='settings' component={Settings}/>
    <Route path='dashboard' component={Dashboard}/>
  </Router>
);

export default Routes;
