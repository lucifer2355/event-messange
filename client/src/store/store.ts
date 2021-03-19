import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import combineReducers from "./reducers/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(thunk))
);
