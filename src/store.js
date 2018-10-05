import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import airplanes from './reducers/airplanes';
import airplaneFormData from './reducers/airplaneFormData';

// utlize combine reducers && middleware for async
const reducers = combineReducers({
  airplanes: airplanes,
  airplaneFormData
});

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // middleware must come after devtools
  applyMiddleware(...middleware) //access thunk, or others if added
);