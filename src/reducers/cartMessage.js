import { FETCH_CART_FAILURE, FETCH_CART_SUCCESS } from "../actions/actionTypes";
const initialState = {
  error: false,
  message: false,
};
export default function cartMessageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_FAILURE:
      return {
        error: true,
        message: true,
      };
    case FETCH_CART_SUCCESS:
      return {
        error: false,
        message: true,
      };
    default:
      return state;
  }
}
