import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    
  </Router>
);

export default Routes;
