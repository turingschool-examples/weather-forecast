import React from 'react';
import { IndexRoute, Router, Route  } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Settings from './components/Settings';
import ExtendedForecast from './components/ExtendedForecast';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/ExtendedForecast" component={ExtendedForecast} />
      <Route path="/Settings" component={Settings} />
    </Route>
  </Router>
);

export default Routes;
