import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const middleware = [thunk, createLogger];
import rootReducer from './reducers/index.js';
import currentWeather from './data/fake-current';

const store = createStore(rootReducer, defaultState);

//setting state in store - can refactor to set state in reducers later
const defaultState = {
  currentWeather
};

//hot load for reducers
// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
