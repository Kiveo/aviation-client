import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import airplanesReducer from './reducers/airplanesReducer';

// utlize combine reducers && middleware for async
const reducers = combineReducers({
  airplanes: airplanesReducer
});

const middleware = [thunk]

export default createStore(
  reducers,
  applyMiddleware(...middleware), //access thunk, or others if added
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);