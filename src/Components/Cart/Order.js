import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrder } from "../../actions/cart";

function Order() {
  const [input, setInput] = useState();

  const { items } = useSelector((state) => state.cart);
  const { error, message } = useSelector((state) => state.cartMessage);
  const dispatch = useDispatch();

  const valueForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const checked = e.target.agreement.checked;
    if (checked && items.length !== 0) {
      //   const newArr = items.map((it) => {
      //     const { title, size, ...otherKeys } = it;
      //     return otherKeys;
      //   });
      //   const newArr = items.map((it) => {
      //     const clone = { ...it };
      //     delete clone.title;
      //     delete clone.size;
      //     return clone;
      //   });
      const newArr = items.map(({ title, size, ...otherKeys }) => otherKeys);
      const body = {
        owner: { ...input },
        items: [...newArr],
      };
      dispatch(fetchOrder(body));
    }
  };
  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: " 30rem", margin: "0 auto" }}>
        <form onSubmit={handleForm} className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              onChange={valueForm}
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Ваш телефон"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              onChange={valueForm}
              className="form-control"
              id="address"
              name="address"
              placeholder="Адрес доставки"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              name="agreement"
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Оформить
          </button>
        </form>
        {message && (
          <div className={`form-answer ${error ? "error" : "success"}`}>
            {error
              ? "Повторите попытку произошла ошибка"
              : "Ваш заказ отправлен"}
          </div>
        )}
      </div>
    </section>
  );
}

export default Order;
