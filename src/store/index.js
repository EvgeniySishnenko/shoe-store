import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import catalogReducer from "../reducers/catalog";
import categoriesReducer from "../reducers/categories";
import searchReducer from "../reducers/search";
import productsReducer from "../reducers/products";
import cartReducer from "../reducers/cart";
import cartMessageReducer from "../reducers/cartMessage";
const reducer = combineReducers({
  catalog: catalogReducer,
  categories: categoriesReducer,
  search: searchReducer,
  products: productsReducer,
  cart: cartReducer,
  cartMessage: cartMessageReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
