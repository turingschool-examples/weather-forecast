import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './containers/App';
import ExtendedForecast from './containers/ExtendedForecast';
import PinnedCities from './containers/PinnedCities';
import Home from './containers/Home';



const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/extended-forecast" component={ExtendedForecast} />
      <Route path="/pinned-cities" component={PinnedCities} />
    </Route>
  </Router>
);



export default Routes;
