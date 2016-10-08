import React from 'react';
import { IndexRoute, Router, Route  } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PinnedCities from './containers/Settings';
import ExtendedForecast from './containers/ExtendedForecast';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/ExtendedForecast" component={ExtendedForecast} />
      <Route path="/Settings" component={PinnedCities} />
    </Route>
  </Router>
);

export default Routes;
