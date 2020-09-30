import { CHANGE_SEARCH_FIELD } from "../actions/actionTypes";
const initialState = {
  value: "",
};
export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      const { value } = action.payload;
      return {
        ...state,
        value: value,
      };
    default:
      return state;
  }
}
