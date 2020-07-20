import {
  FETCH_SHOES_REQUEST,
  FETCH_SHOES_FAILURE,
  FETCH_SHOES_SUCCESS,
  MORE_SHOES_SUCCESS,
} from "./actionTypes";

export const fetchShoesRequest = () => ({
  type: FETCH_SHOES_REQUEST,
});

export const fetchShoesFailure = (error) => ({
  type: FETCH_SHOES_FAILURE,
  payload: {
    error,
  },
});

export const fetchShoesSuccess = (items) => ({
  type: FETCH_SHOES_SUCCESS,
  payload: {
    items,
  },
});
export const moreShoesSuccess = (items, offset) => ({
  type: MORE_SHOES_SUCCESS,
  payload: {
    items,
    offset,
  },
});

// поиск всех товаров. Запускается при  загрузки страницы
export const fetchAllCatalog = () => async (dispatch) => {
  dispatch(fetchShoesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/items`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchShoesSuccess(data));
  } catch (e) {
    dispatch(fetchShoesFailure(e.message));
  }
};

// фильтр. Запускается при клике на категории. Делает запрос и отображает выбранную
export const fetchFilterCatalog = (category) => async (dispatch) => {
  let path;
  if (category === "all") {
    path = "items";
  } else {
    path = `items?categoryId=${category}`;
  }
  dispatch(fetchShoesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchShoesSuccess(data));
  } catch (e) {
    dispatch(fetchShoesFailure(e.message));
  }
};
// Реагирует на нажатие показать еще.
export const moreShoes = (category, offset, value) => async (dispatch) => {
  let path;
  if (category === "all") {
    path = `items?${value !== "" ? "q=" + value + "&" : ""}offset=${offset}`;
  } else {
    path = `items?categoryId=${category}&offset=${offset}`;
  }
  dispatch(fetchShoesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(moreShoesSuccess(data, offset));
  } catch (e) {
    dispatch(fetchShoesFailure(e.message));
  }
};
// Реагирует на строку поиска в каталоге
export const searchGetShoes = (value) => async (dispatch) => {
  dispatch(fetchShoesRequest());
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/items?q=${value}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchShoesSuccess(data));
  } catch (e) {
    dispatch(fetchShoesFailure(e.message));
  }
};
