import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import RootReducer from './reducers/RootReducer';

const middleware = [thunk, createLogger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  {}, // initial state object
	composeEnhancers(
		applyMiddleware(thunk)
	)
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
// EXAMPLE CURRENT WEATHER @ GBANK
 // http://api.openweathermap.org/data/2.5/forecast?lat=39.7509886&lon=-104.9961373&APPID=0fa5f7da0eba0ddb1679162cd1b64e3d
