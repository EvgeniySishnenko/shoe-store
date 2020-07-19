import {
  MORE_SHOES_REQUEST,
  MORE_SHOES_FAILURE,
  MORE_SHOES_SUCCESS,
} from "./actionTypes";

export const moreShoesRequest = () => ({
  type: MORE_SHOES_REQUEST,
});

export const moreShoesFailure = (error) => ({
  type: MORE_SHOES_FAILURE,
  payload: {
    error,
  },
});

export const moreShoesSuccess = (items) => ({
  type: MORE_SHOES_SUCCESS,
  payload: {
    items,
  },
});
