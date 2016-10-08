import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import reducer from './reducers';
import store from './store';
require('./css/main.css');

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
