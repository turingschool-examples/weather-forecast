import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';

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



{/* <Router history={browserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='features' component={Features} />
  </Route>
</Router>, */}
