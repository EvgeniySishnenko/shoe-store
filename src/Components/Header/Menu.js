import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/">
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active"
          className="nav-link"
          to="/catalog.html"
        >
          Каталог
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/about.html">
          О магазине
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          activeClassName="active"
          to="/contacts.html"
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  );
}
export default Menu;
