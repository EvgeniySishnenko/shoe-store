import {
  ADD_CART,
  RESET_CART,
  FETCH_CART_FAILURE,
  FETCH_CART_SUCCESS,
} from "./actionTypes";
export const addCart = (items, totalCount, totalPrice) => ({
  type: ADD_CART,
  payload: {
    items,
    totalCount,
    totalPrice,
  },
});
export const resetCart = () => ({
  type: RESET_CART,
});

export const fetchCartSuccess = () => ({
  type: FETCH_CART_SUCCESS,
});
export const fetchCartFailure = () => ({
  type: FETCH_CART_FAILURE,
});
export const addToCart = (
  items,
  item,
  counter,
  size,
  avalible,
  history
) => async (dispatch) => {
  if (size !== "" && avalible !== undefined) {
    if (items.length !== 0) {
      const index = items.findIndex((el) => {
        return el.id === item.id && el.size === size;
      });
      if (index >= 0) {
        items[index]["count"] += counter.counter;
      } else {
        items = [
          ...items,
          {
            id: item.id,
            title: item.title,
            size: size,
            count: counter.counter,
            price: item.price,
          },
        ];
      }
    } else {
      items = [
        {
          id: item.id,
          title: item.title,
          size: size,
          count: counter.counter,
          price: item.price,
        },
      ];
    }
    localStorage.setItem("cart", JSON.stringify(items));

    history.push("/cart");
  }
};
export const removeProductCart = (id, items) => (dispatch) => {
  const res = items.filter((item) => item.id !== Number(id));
  localStorage.setItem("cart", JSON.stringify(res));
  dispatch(updateCart());
};
export const updateCart = () => async (dispatch) => {
  let arr =
    JSON.parse(localStorage.getItem("cart")) !== null
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  let totalCount = 0;
  let totalPrice = 0;
  arr !== null &&
    arr.map((a) => {
      totalCount += a.count;
      totalPrice = totalPrice + a.count * a.price;
    });
  localStorage.setItem("cart", JSON.stringify(arr));

  dispatch(addCart(arr, totalCount, totalPrice));
};
export const fetchOrder = (body) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    localStorage.removeItem("cart");
    dispatch(resetCart());
    dispatch(fetchCartSuccess());
  } catch (error) {
    dispatch(fetchCartFailure());
  }
};
