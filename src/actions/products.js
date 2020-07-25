import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: {
    error,
  },
});

export const fetchProductsSuccess = (item) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {
    item,
  },
});
export const fetchProducts = (id) => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/items/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (e) {
    dispatch(fetchProductsFailure(e.message));
  }
};
