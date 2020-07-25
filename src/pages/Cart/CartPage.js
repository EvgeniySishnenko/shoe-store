import React from "react";
import Cart from "../../Components/Cart/Cart";
import Order from "../../Components/Cart/Order";
function CartPage() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Cart />
          <Order />
        </div>
      </div>
    </main>
  );
}

export default CartPage;
