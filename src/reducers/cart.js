import { ADD_CART, RESET_CART } from "../actions/actionTypes";
const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      const { totalCount, items, totalPrice } = action.payload;
      return {
        items,
        totalCount,
        totalPrice,
      };
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
}
