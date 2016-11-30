import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';

const middleware = [thunk, createLogger];

const store = createStore(
  combineReducers({
    weatherApp: reducer,
  }),
  {}, // initial state object
  applyMiddleware(...middleware)
)
0
render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
//0fa5f7da0eba0ddb1679162cd1b64e3d
