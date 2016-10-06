import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const middleware = [thunk, createLogger];
import rootReducer from './reducers';

const store = createStore(rootReducer,
  applyMiddleware(...middleware)
);
