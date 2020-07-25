import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  item: [],
  loading: false,
  error: null,
};
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case FETCH_PRODUCTS_SUCCESS:
      const { item } = action.payload;

      return {
        ...state,
        item,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
