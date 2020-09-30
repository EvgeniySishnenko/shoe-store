import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  ADD_CATEGORY_USE_REF,
} from "./actionTypes";

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: {
    error,
  },
});

export const fetchCategoriesSuccess = (items) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: {
    items,
  },
});
export const addCategoryUseRef = (category) => ({
  type: ADD_CATEGORY_USE_REF,
  payload: {
    category,
  },
});
export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/categories`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchCategoriesSuccess(data));
  } catch (e) {
    dispatch(fetchCategoriesFailure(e.message));
  }
};
