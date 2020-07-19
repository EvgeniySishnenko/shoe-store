import {
  FETCH_SHOES_REQUEST,
  FETCH_SHOES_FAILURE,
  FETCH_SHOES_SUCCESS,
  MORE_SHOES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
  offset: 6,
  showBtn: true,
};
export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SHOES_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case FETCH_SHOES_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
        offset: 6,
        showBtn: action.payload.items.length >= 6,
      };
    case MORE_SHOES_SUCCESS:
      const { offset } = action.payload;

      return {
        ...state,
        items: [...state.items, ...action.payload.items],
        loading: false,
        error: null,
        offset: offset + 6,
        showBtn: action.payload.items.length >= 6,
      };
    default:
      return state;
  }
}
