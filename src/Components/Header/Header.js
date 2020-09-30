import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import SearchCart from "./SearchCart";
import logo from "../../img/header-logo.png";
function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink activeClassName="active" className="navbar-brand" to="/">
              <img src={logo} alt="Bosa Noga" />
            </NavLink>

            <div className="collapase navbar-collapse" id="navbarMain">
              <Menu />
              <SearchCart />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
