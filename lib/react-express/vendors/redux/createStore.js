import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { indexReducer } from './reducers/index';
import { testReducer } from './reducers/test';

// ReduxStore
const createStore = () => {
  const store = reduxCreateStore(
    combineReducers({
      //--- REDUCER ---->
      indexReducer,
      testReducer,
      //---------------->
    }),
    applyMiddleware(thunk)
  );
  return store;
}

export default createStore;