import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Forecast from './containers/Forecast';
import SettingsForm from './containers/SettingsForm';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="/forecast/:i" component={Forecast}/>
      <Route path="/settings" component={SettingsForm}/>
      {/* <Route path='/dashboard' component={Dashboard}/> */}
    </Route>
  </Router>
);

export default Routes;
