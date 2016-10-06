import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const middleware = [thunk, createLogger];

const store = createStore(rootReducer,
  applyMiddleware(...middleware)
);

export default store;
