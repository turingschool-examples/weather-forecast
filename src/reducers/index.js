import { combineReducers } from 'redux';

const rootReducer = combineReducers({ exampleReducer, exampleReducer2 });

const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const exampleReducer2 = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer;
