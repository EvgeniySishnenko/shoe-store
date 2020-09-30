import { CHANGE_SEARCH_FIELD } from "./actionTypes";
export const changeSearchField = (value) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: {
    value,
  },
});
