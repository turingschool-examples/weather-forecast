import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Forecast from './containers/Forecast';
import Settings from './containers/Settings';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <Route path='forecast'>
        <IndexRoute component={Forecast}/>
      </Route>
      {/* <IndexRoute to='/dashboard' component={Dashboard}/>
      <IndexRoute to='/settings' component={Settings}/> */}
    </Route>
  </Router>
);

export default Routes;
