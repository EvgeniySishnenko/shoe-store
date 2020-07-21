import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img
          src={item.images[0]}
          className="card-img-top img-fluid"
          alt="Босоножки 'MYER'"
        />
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-text">{item.price} руб.</p>
          <Link
            to={`/catalog/${item.id}.html`}
            className="btn btn-outline-primary"
          >
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
