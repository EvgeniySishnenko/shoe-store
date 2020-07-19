import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import catalogReducer from "../reducers/catalog";
import categoriesReducer from "../reducers/categories";

const reducer = combineReducers({
  catalog: catalogReducer,
  categories: categoriesReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
