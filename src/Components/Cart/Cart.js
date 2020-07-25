import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeProductCart } from "../../actions/cart";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);
  const removeProductCart1 = (e) => {
    e.preventDefault();
    let id = e.target.dataset.id;
    dispatch(removeProductCart(id));
  };
  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr> */}
          {items &&
            items.map((a, i) => {
              return (
                <tr key={a.id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <Link to={`/catalog/${a.id}`}>{a.title}</Link>
                  </td>
                  <td>{a.size}</td>
                  <td>{a.count}</td>
                  <td>{a.price}</td>
                  <td>{a.count * a.price}</td>
                  <td>
                    <button
                      type="button"
                      onClick={removeProductCart1}
                      data-id={a.id}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
          {/* </tr> */}
          <tr>
            <td colSpan="5" className="text-right">
              Общая стоимость
            </td>
            <td>
              {String(totalPrice).replace(
                /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                "$1" + " "
              )}{" "}
              руб.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Cart;
