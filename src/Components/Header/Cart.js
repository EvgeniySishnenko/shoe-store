import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../actions/cart";

function Cart() {
  const { items, totalCount } = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const goToCart = () => {
    history.push("/cart");
  };
  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch]);
  return (
    <div
      onClick={goToCart}
      className="header-controls-pic header-controls-cart"
    >
      {totalCount !== 0 && (
        <div className="header-controls-cart-full">{totalCount}</div>
      )}
      <div className="header-controls-cart-menu"></div>
    </div>
  );
}
export default Cart;
